/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-03-07 10:17:03
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-03-23 09:29:20
 * @FilePath: \viking-ship\commitlint.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],
    // 定义规则类型
    rules: {
        // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
        'type-enum': [
            // 当前验证的错误级别
            2,
            // 在什么情况下进行验证
            'always',
            // 泛型内容，与cz-config.js中类型一致
            [
                'feat', // 新功能 feature
                'fix', // 修复 bug
                'docs', // 文档注释
                'style', // 代码格式(不影响代码运行的变动)
                'refactor', // 重构(既不增加新功能，也不是修复bug)
                'perf', // 性能优化
                'test', // 增加测试
                'chore', // 构建过程或辅助工具的变动
                'revert', // 回退
                'build', // 打包
            ],
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72],
        // subject 大小写不做校验
        'subject-case': [0],
    },
};
