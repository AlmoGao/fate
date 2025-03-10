<!-- 开始表单 -->
<template>
    <div class="learn" :class="{ 'open-learn': opened }">
        <div class="roll_bg"></div>
        <div class="roll_content learn_content">
            <div class="close" @click="close">关闭</div>
            <div class="content" v-if="opened">
                <div class="step">
                    <div class="step-content">
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;">
                            心中要默念想要预测的事物</div>
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 0.5s;">随念给出任意三个数字（不能为0）
                        </div>
                        <div>&nbsp;</div>
                        <div class="form">
                            <div class="form-item showani" style="animation-delay: 1s;">
                                <div class="form-ipt">
                                    <input placeholder="输入第1个数字:" v-model="n1" type="number" min="1">
                                </div>
                            </div>
                            <div class="form-item showani" style="animation-delay: 1.5s;">
                                <div class="form-ipt">
                                    <input placeholder="输入第2个数字:" v-model="n2" type="number" min="1">
                                </div>
                            </div>
                            <div class="form-item showani" style="animation-delay: 2s;">
                                <div class="form-ipt">
                                    <input placeholder="输入第3个数字:" v-model="n3" type="number" min="1">
                                </div>
                            </div>
                            <div class="form-item showani" style="animation-delay: 2.5s;">
                                <div class="form-ipt">
                                    <input style="width: 100%;" placeholder="你像预测什么？比如是否能赚大钱:" v-model="q" type="str"
                                        maxlength="25">
                                </div>
                            </div>
                        </div>
                        <div>&nbsp;</div>
                    </div>
                </div>
            </div>
            <div class="next" :class="{ 'ready': ready }" @click="confirm">确认掐诀</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue"

const opened = ref(false)
const n1 = ref(null)
const n2 = ref(null)
const n3 = ref(null)
const q = ref('')

const ready = computed(() => {
    return n1.value > 0 && n2.value > 0 && n3.value > 0
})

const emits = defineEmits(['start', 'handleQ'])
const confirm = () => {
    if (!ready.value) return alert('请输入三个数字')
    opened.value = false
    emits('handleQ', q.value)
    emits('start', [n1.value, n2.value, n3.value])
}

const open = () => {
    n1.value = null
    n2.value = null
    n3.value = null
    q.value = ''
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
    animation: show 1.5s ease forwards;
}

@keyframes re {
    0% {
        background-image: linear-gradient(to right, yellow, red);
    }

    25% {
        background-image: linear-gradient(to right, rgb(111, 255, 152), rgb(29, 149, 255));
    }

    50% {
        background-image: linear-gradient(to right, rgb(72, 218, 255), rgb(29, 59, 255)d);
    }

    75% {
        background-image: linear-gradient(to right, rgb(230, 230, 96), rgb(255, 188, 188));
    }

    100% {
        background-image: linear-gradient(to right, rgb(237, 74, 255), rgb(255, 45, 45));
    }
}

.ready {
    -webkit-background-clip: text;
    color: transparent;
    animation: re 1s linear infinite;
    font-weight: bold;
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

            .form {
                padding: 4rem 6rem;

                .form-ipt {

                    input {
                        width: 40rem;
                        margin-bottom: 5rem;
                        padding: 2rem;
                        border: 1px solid #666;

                        &:focus {
                            border-color: #fff;
                        }
                    }
                }
            }

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