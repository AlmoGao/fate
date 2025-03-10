<!-- 学习 -->
<template>
    <div class="learn" :class="{ 'open-learn': opened }">
        <div class="roll_bg"></div>
        <div class="roll_content learn_content">
            <div class="close" @click="close">关闭教程</div>
            <div class="content" v-if="opened">
                <div class="step" v-if="step == 1">
                    <div class="title showani">一、起念</div>
                    <div class="step-content">
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 1s;">
                            首先心中要默念想要预测的事物，带入自身的能量进入这次测算，称为 “起念”。</div>
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 2s;">道家理念中 “三生万物”
                            所以起念之后需要跟着念想给出三个数字或者能转换成数字的事物。</div>
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 3s;">比如给出农历生日 1999、01、01，或者给出三个字
                            “高半仙” 转换笔画为数字之后是
                            10、5、5，亦或者我星期天要到十公里外的工地搬砖为了赚50块钱的伙食费 得到数字 7、10、50。</div>
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 4s;">当然比如我的银行卡余额0.00，得出数字 0、0、0
                            这样是无效的，时间不会停止，0代表的是过去。</div>
                    </div>
                </div>
                <div class="step" v-if="step == 2">
                    <div class="title showani">二、掐诀</div>
                    <div class="step-content">
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 1s;">使用左手，将食指、中指、无名指的指节作为计数器。
                        </div>
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 2s;">按下图的顺序，去数起念得到的三个数字，每数完一个
                            记下当前的位置，然后继续往下数。</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div class="counts showani" style="animation-delay: 4s;">
                            <div class="count-row" style="transform: scaleX(1.1) rotate(-4deg) translateX(-1rem);">
                                <div class="count-item" style="border:none">&nbsp;</div>
                                <div class="count-item">&nbsp;</div>
                                <div class="count-item">&nbsp;</div>
                            </div>
                            <div class="count-row">
                                <div class="count-item">
                                    <div>2</div>
                                    <div class="explain">留连</div>
                                </div>
                                <div class="count-item">
                                    <div>1</div>
                                    <div class="explain">大安</div>
                                </div>
                                <div class="count-item">
                                    <div>8</div>
                                    <div class="explain">桃花</div>
                                </div>
                            </div>
                            <div class="count-row">
                                <div class="count-item">
                                    <div>3</div>
                                    <div class="explain">速喜</div>
                                </div>
                                <div class="count-item">
                                    <div>6</div>
                                    <div class="explain">空亡</div>
                                </div>
                                <div class="count-item">
                                    <div>5</div>
                                    <div class="explain">小吉</div>
                                </div>
                            </div>
                            <div class="count-row">
                                <div class="count-item">
                                    <div>7</div>
                                    <div class="explain">病符</div>
                                </div>
                                <div class="count-item">
                                    <div>4</div>
                                    <div class="explain">赤口</div>
                                </div>
                                <div class="count-item">
                                    <div>9</div>
                                    <div class="explain">天德</div>
                                </div>
                            </div>
                            <div class="count-row"
                                style="transform: scaleX(0.8) scaleY(0.8) rotate(4deg) translateY(4rem);">
                                <div class="count-item">&nbsp;</div>
                                <div class="count-item">&nbsp;</div>
                                <div class="count-item">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step" v-if="step == 3">
                    <div class="title showani">三、解念</div>
                    <div class="step-content">
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 1s;">比如起念的三个数字为 1、1、1，掐诀得到的三个状态是
                            大安、留连、速喜。下边来解析</div>
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 2s;">首先三个状态分别代表
                            起始、途中、结果，每个状态都有自己的属性。三个状态连续起来，就表示想要预测的事情将会有如何的发生发展和结果。
                        </div>
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 3s;">
                            那么如果我是预测我将来是否发财， 大安、留连、速喜 就表示
                            <div style="text-indent: 2em;">一开始大安，非常吉利，稳步前进，能够制定一个很好的计划或者方案</div>
                            <div style="text-indent: 2em;">过程中是留连，主拖延纠缠，也就是计划执行的过程会遇到一些问题纠缠，并不顺利</div>
                            <div style="text-indent: 2em;">结果是速喜，象征着问题被很快解决，并很快得到回报。但速喜并不长久，还需要主动寻求合作以谋求更好的结果。</div>
                        </div>
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 4s;">当然，现在我们可以通过DeepSeek来帮助分析。
                        </div>
                        <div>&nbsp;</div>
                        <!-- 我掐诀按顺序得到 大安、留连、速喜   我想要咨询的是未来是否能赚到钱，请为我从发生发展结果来解析，尽量详细 -->
                        <div class="showani" style="text-indent: 2em;animation-delay: 5s;">
                            <div>状态注解：</div>
                            <ol>
                                <li>大安（木）— 东方，属虎/兔，农历正/二月或寅卯时，大吉，象征安稳顺利，宜静守谋事、婚嫁求财。</li>
                                <li>留连（土/水）— 中央/东北，属牛/龙/羊/狗，农历三六九十二月或丑辰时，中平偏凶，主拖延纠缠，需谨慎忌远行。</li>
                                <li>速喜（火）— 南方，属蛇/马，农历四/五月或巳午时，大吉，象征快速喜庆，宜主动行动、合作表白。</li>
                                <li>赤口（金）— 西方，属猴/鸡，农历七/八月或申酉时，大凶，主口舌争斗，需防小人、避诉讼争吵。</li>
                                <li>小吉（水）— 北方，属猪/鼠，农历十/十一月或亥子时，小吉，主机遇贵人，宜出行交易、借力成事。</li>
                                <li>空亡（土/虚无）— 方位不定，属龙/狗，农历三/九月，大凶，象征落空意外，诸事不宜、需调整心态。</li>
                                <li>病符（土）— 西南，属牛/羊，主疾病衰运，忌动土搬迁，需注重健康化解灾病。</li>
                                <li>桃花（水/木）— 正北/正东，属鼠/兔，主情缘机遇，子卯时或春季，防烂桃花纠缠。</li>
                                <li>天德（阳土）— 西北，属狗，象征贵人护佑，可逢凶化吉，宜祈福消灾、顺势而为。</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div class="next" v-if="step != 3" @click="step++">下一步</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const opened = ref(false)
const step = ref(1)
const open = () => {
    step.value = 1
    opened.value = true
}
const close = () => {
    opened.value = false
}

defineExpose({
    open,
})
</script>

<style lang="less" scoped>
@keyframes show {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.showani {
    opacity: 0;
    animation: show 2s ease forwards;
}

.learn {
    position: absolute;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 0;
    height: 0;
    background-color: #000;
    overflow: hidden;
    transition: all ease-out .2s;

    .learn_content {
        display: flex;
        flex-direction: column;
        padding: 4rem;

        .close {
            text-decoration: underline;
        }

        .content {
            flex: 1;
            overflow: hidden;
            margin: 8rem 0;

            .step {
                height: 100%;
                display: flex;
                flex-direction: column;
                overflow: hidden;

                .title {
                    font-size: 5rem;
                    margin-bottom: 4rem;
                }

                .step-content {
                    flex: 1;
                    overflow-y: auto;
                    line-height: 6rem;

                    .counts {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .count-row {
                            margin: 0 1rem;

                            .count-item {
                                text-align: center;
                                border: 1px solid #aaa;
                                min-width: 9rem;
                                min-height: 14rem;

                                .explain {
                                    font-size: 3.2rem;
                                    color: #ccc;
                                }
                            }
                        }
                    }
                }
            }

        }

        .next {
            text-align: center;
            text-decoration: underline;
            padding-bottom: 8rem;
        }
    }
}

.open-learn {
    width: 100%;
    height: 100%;
}
</style>