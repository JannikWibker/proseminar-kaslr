# Slides

Uses [marp](https://marp.app) for slides along with a few markdown-it plugins and a [custom theme](https://github.com/JannikWibker/marp-theme).

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

### Non-literature

This repo uses the [Rosé Pine](https://rosepinetheme.com/) theme (base and dawn variants) for code blocks.
