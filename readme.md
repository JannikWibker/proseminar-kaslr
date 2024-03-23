# Slides

Uses [marp](https://marp.app) for slides along with a few markdown-it plugins and a [custom theme](https://github.com/JaninaWibker/marp-theme).

[pnpm](https://pnpm.io) was chosen as the package manager, but npm works as a drop-in replacement.

```sh
pnpm install
pnpm dev   # for browser preview
pnpm build # for building slides
```

## Attribution

- [Breaking Kernel Address Space Layout Randomization with Intel TSX](https://dl.acm.org/doi/10.1145/2976749.2978321) (2016) by Yeongjin Jang, Sangho Lee, and Taesoo Kim
- [KASLR: Break It, Fix It, Repeat](https://doi.org/10.1145/3320269.3384747) (2020) by Claudio Canella, Michael Schwarz, Martin Haubenwallner, Martin Schwarzl, and Daniel Gruss
- [Differences between ASLR, KASLR and KARL](https://www.daniloaz.com/en/differences-between-aslr-kaslr-and-karl/) (2017) by Daniel López Azaña
- [Windows 10 KASLR Recovery with TSX](https://blog.frizk.net/2016/11/windows-10-kaslr-recovery-with-tsx.html) (2016) by Ulf Frisk
- [KAISER: hiding the kernel from user space](https://lwn.net/Articles/738975/) (2017) by Jonathan Corbet
- [KASLR is Dead: Long Live KASLR](https://gruss.cc/files/kaiser.pdf) (2017) by Daniel Gruss, Moritz Lipp, Michael Schwarz, Richard Fellner, Clémentine Maurice and Stefan Mangard
- [Prefetch Side-Channel Attacks: Bypassing SMAP and Kernel ASLR]() (https://gruss.cc/files/prefetch.pdf) (2016) by Daniel Gruss, Maurice Cl'Ementine,  Anders Fogh, Moritz Lipp and Stefan Mangard
- [Supervisor mode access prevention](https://lwn.net/Articles/517475/) (2012) by Jonathan Corbet
- [TMT: A TLB Tag Management Framework for Virtualized Platforms](https://link.springer.com/article/10.1007/s10766-011-0189-y) (2012) by Girish Venkatasubramanian,  Renato Figueiredo,  Ramesh Illikkal and Donald Newell
- [Intel® Transactional Synchronization Extensions (Intel® TSX) Overview](https://www.intel.com/content/www/us/en/docs/cpp-compiler/developer-guide-reference/2021-8/tsx-programming-considerations-ov.html)
- [Intel® 64 and IA-32 Architectures Software Developer's Manual, Volume 3](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html)

### Non-literature

This repo uses the [Rosé Pine](https://rosepinetheme.com/) theme (base and dawn variants) for code blocks.
