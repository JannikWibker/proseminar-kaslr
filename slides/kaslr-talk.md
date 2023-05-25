---
_class: lead
paginate: true
_paginate: false
---

# Kernel Address Space Layout Randomization

==Jannik Wibker==

---


## Attacks against KASLR

Multiple attacks against KASLR have been published.

They all try to gather information about the memory layout of the kernel. (If possible) pages get categorized into:
- kernel code
- data structures
- drivers / modules

---

## Attacks against KASLR

- Done by checking if a specific address is mapped or not.
- Some exploits can check for executable pages.
- Seldom exploits can read actual data.

All of those need some sort of explicit exploit as this isn't normally possible from user space.

---

## Attacks against KASLR - DrK

One of those is called **DrK**.

Based on **TSX** (*Intel Transactional Synchronization Extension*)


---

## Attacks against KASLR - TSX

Similar concept to database transactions.

```
* start transaction
* do work (or abort)
* commit transaction
```

If `do work` fails, everything done prior in the transaction is rolled back.

---

## Attacks against KASLR - TSX

```c
// start transaction, if rolled back execution continues from here
// but with a different return value (status code of transaction)
if (_xbegin() == _XBEGIN_STARTED) {

  ... // do work

  _xend();        // commit transaction
  _xabort(status) // or abort with status code
} else {
  // abort handler
}
```

---

## Attacks against KASLR - DrK

DrK abuses that exceptions are treated differently in TSX than otherwise.

If an exception (e.g. **page fault**, **access violation**) occurs, the transaction is aborted and rolled back, but the **kernel is not notified**.

---

## Attacks against KASLR - DrK

**Idea**:
Page faults and access violations take different amounts of time depending on the status of the page

Measure the clock cycles for memory accesses and infer wether it is:
- mapped / unmapped
- executable / not executable

---

## Attacks against KASLR - DrK

```c
uint64_t do_probe_memory(void* addr) {
  uint64_t beg = rdtsc_beg();               // start timer

  if (_xbegin() == _XBEGIN_STARTED) {
                                            // generates access violation
    asm volatile("mov rax, [addr]");        // mapped vs unmapped
  } else {
    return rdtsc_end() - beg;               // compute time difference
  }
}
```

---

## Attacks against KASLR - DrK

```c
uint64_t do_probe_memory(void* addr) {
  uint64_t beg = rdtsc_beg();               // start timer

  if (_xbegin() == _XBEGIN_STARTED) {
                                            // generates access violation
    asm volatile("mov rax, addr; jmp rax"); // executable vs non-executable
  } else {
    return rdtsc_end() - beg;               // compute time difference
  }
}
```

---

## Attacks against KASLR - DrK

![bg height:400px](./assets/m_vs_u_timing.png)
![bg height:400px](./assets/n_vs_nx_timing.png)

