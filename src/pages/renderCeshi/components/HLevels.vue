<!--
 * @Author: yaoxilong 1299583049@qq.com
 * @Date: 2022-09-24 21:54:42
 * @LastEditors: yaoxilong 1299583049@qq.com
 * @LastEditTime: 2022-09-24 21:56:47
 * @FilePath: \vue2\src\components\HLevels.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script>
export default {
    props: {
        level: {
            type: Number,
            default: 1,
        },
    },
    methods: {
        show() {
            alert(111);
        },
    },
    render(h) {
        console.log(h);
        const tag = `h${this.level}`;
        return (
            <tag name={"gaofeng"} onclick={this.show}>
                {this.$slots.default}
                <div>{this.$slots.content}</div>
            </tag>
        );
    },
};

</script>