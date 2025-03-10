<!-- 结果 -->
<template>
    <div class="learn" :class="{ 'open-learn': opened }">
        <div class="roll_bg"></div>
        <div class="roll_content learn_content">
            <div class="close" @click="close">关闭</div>
            <div class="content" v-if="opened">
                <div class="step">
                    <div class="title showani">解析结果</div>
                    <div class="step-content">
                        <div>&nbsp;</div>
                        <div class="showani" style="text-indent: 2em;animation-delay: 1s;">
                            <pre v-html="props.rs"></pre>
                        </div>
                        <div>&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
    rs: {
        type: String,
        default: ''
    }
})

const opened = ref(false)
const open = () => {
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