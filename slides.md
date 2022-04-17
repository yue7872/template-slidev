---
layout: cover
highlighter: shiki
info: |
  ## Share

  PPT template of blairyue's talk.这是一个模板，可以用来制作ppt。

  [blairyue]() at 2022年4月17日
---

# 很长很长很长的主标题呀

这里是副标题

<div class="bottom-25 absolute">
blairyue
2022.04.17
</div>

---
layout: cover
---

  <h1 class="float-left">目录</h1>
  <div class="float-right border-l border-gray-400 border-opacity-25 !all:leading-12 !all:list-none">

  - Content1
  - Content2
  - Content3
  - Content4

  </div>

---
layout: center
class: text-center
---

# Content1

description

---
layout: two-cols
---

### 高亮代码

```ts {all|1|3|5|all}
import { ref } from 'vue'
let foo = 0
let bar = ref(0)
foo = 1
bar = 1 // ts-error
```

::right::

<div v-click class="ml-10">

### 可编辑

```ts  {monaco}
import { ref } from 'vue'
let foo = 0
let bar = ref(0)
foo = 1
bar = 1 // ts-error
```
</div>


---
layout: two-cols
clicks: 4
---


# clicks实验

<v-clicks>

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>

::right::

<v-clicks at="1">

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>
