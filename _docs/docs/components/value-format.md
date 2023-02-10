# ValueFormat 值格式化

::: tip
值格式化
:::

| 属性名               | 说明         | 类型                  | 可选值 | 默认值   |
|-------------------|------------|---------------------|-----|-------|
| value / v-model   | 绑定值（必填）    | -                   | -   | -     |
| before | 修改前值        | `Function` | -   | -     |
| after | 修改后值        | `Function` | -   | -     |
| no-emit       | 不自动触发更新     | `Boolean`           | -   | false |


### ValueFormat 插槽

| 插槽名     | 说明   |
|---------|------|
| default | 默认插槽 |

### ValueFormat `default` 插槽 对外暴露的方法

| 属性名   | 说明     | 类型         | 示例  |
|-------|--------|------------|-----|
| scope | 当前值    | -          | -   |
| emit  | 触发更新方法 | `Function` | -   |