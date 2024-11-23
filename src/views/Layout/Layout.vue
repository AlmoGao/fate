<!-- 页面容器 -->
<template>
    <div class="page-layout">
        <!-- 结果 -->
        <div>
            <div v-for="(item, i) in result" :key="i">{{ dataMap[item].name || '' }}</div>
        </div>

        <!-- 手 -->
        <div class="hand">
            <div class="hand-item hand0">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <div class="hand-item hand1">
                <div class="finger finger1" :class="{ 'curr-finger': curr == 2 }">{{ dataMap[2].name }}</div>
                <div class="finger finger2" :class="{ 'curr-finger': curr == 1 }">{{ dataMap[1].name }}</div>
                <div class="finger finger3" :class="{ 'curr-finger': curr == 8 }">{{ dataMap[8].name }}</div>
                <div class="finger-shadow"></div>
            </div>
            <div class="hand-item hand2">
                <div class="finger finger1" :class="{ 'curr-finger': curr == 3 }">{{ dataMap[3].name }}</div>
                <div class="finger finger2" :class="{ 'curr-finger': curr == 6 }">{{ dataMap[6].name }}</div>
                <div class="finger finger3" :class="{ 'curr-finger': curr == 5 }">{{ dataMap[5].name }}</div>
                <div class="finger-shadow"></div>
            </div>
            <div class="hand-item hand3">
                <div class="finger finger1" :class="{ 'curr-finger': curr == 7 }">{{ dataMap[7].name }}</div>
                <div class="finger finger2" :class="{ 'curr-finger': curr == 4 }">{{ dataMap[4].name }}</div>
                <div class="finger finger3" :class="{ 'curr-finger': curr == 9 }">{{ dataMap[9].name }}</div>
                <div class="finger-shadow"></div>
            </div>
            <div class="hand4"></div>
            <div class="hand5" :class="['hand5-' + curr]">
                <div class="hand5-item1"></div>
                <div class="hand5-item2"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const curr = ref(0)
const dataMap = ref({
    1: { name: '大安' },
    2: { name: '留连' },
    3: { name: '速喜' },
    4: { name: '赤口' },
    5: { name: '小吉' },
    6: { name: '空亡' },
    7: { name: '病符' },
    8: { name: '桃花' },
    9: { name: '天德' },
})

let count = 0 // 初始值
let interval = null
const run = num => {
    return new Promise(resolve => {
        if (num <= 0) return resolve(curr.value)
        if (num > 81) num = num % 81
        num = Math.ceil(num)
        let n = 0
        interval = setInterval(() => {
            count += 1
            n += 1
            curr.value = count % 9 == 0 ? 9 : count % 9
            console.error(count, n, num)
            if (n == num) {
                clearInterval(interval)
                resolve(curr.value)
            }
        }, 200)
    })
}

const result = ref([])
const start = async arr => {
    run(arr[0]).then(r1 => {
        result.value[0] = r1

        setTimeout(() => {
            run(arr[1]).then(r2 => {
                result.value[1] = r2

                setTimeout(() => {
                    run(arr[2]).then(r3 => {
                        result.value[2] = r3

                        setTimeout(() => {
                            curr.value = 0
                        }, 1500)
                    })
                }, 1500)
            })
        }, 1500)
    })
}

const init = () => {
    count = 0
    result.value = []
    if (interval) clearInterval(interval)
}


setTimeout(() => {
    start([17, 22, 13])
}, 2000);
</script>

<style lang="less">
.page-layout {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .hand {
        position: absolute;
        width: 90rem;
        height: 100rem;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        .hand-item {
            display: flex;
            flex-direction: column;
            position: relative;

            .finger {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #fff;
                opacity: 0;
                transition: all ease .3s;
                border-radius: 1rem;
            }

            .finger1 {
                border-radius: 10rem 6rem 0 0;
            }

            .finger3 {
                border-bottom: none;
            }

            .curr-finger {
                opacity: 1;
            }

            .finger-shadow {
                width: 100%;
                height: 30%;
                border: 1px solid rgba(255, 255, 255, 0.15);
                border-radius: 1rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }

        .hand0 {
            width: 50rem;
            height: 40rem;
            position: absolute;
            right: 10rem;
            bottom: 0;
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 12rem 8rem 4rem 2rem;
            border-bottom: none;

            .line1 {
                width: 26rem;
                height: 20rem;
                position: absolute;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                top: -4rem;
                right: 6rem;
                border-radius: 0 0 0 12rem;
                transform: rotate(4deg);
            }

            .line2 {
                position: absolute;
                border-top: 1px solid rgba(255, 255, 255, 0.3);
                width: 20rem;
                height: 100rem;
                top: 14rem;
                left: -20rem;
                transform: rotate(30deg);
                border-radius: 0 100rem 0 0;
            }

            .line3 {
                position: absolute;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                width: 30rem;
                height: 20rem;
                top: 18rem;
                left: 6rem;
                transform: rotate(24deg);
                border-radius: 2rem 4rem 0 0;
            }
        }

        .hand1 {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.5);
            width: 10rem;
            height: 50rem;
            top: 12rem;
            left: 30rem;
            transform: rotate(-4deg);
            border-bottom: none;
            border-radius: 10rem 6rem 2rem 2rem;
        }

        .hand2 {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.5);
            width: 10rem;
            height: 56rem;
            top: 4rem;
            left: 46rem;
            transform: rotate(-1deg);
            border-bottom: none;
            border-radius: 10rem 6rem 2rem 2rem;
        }

        .hand3 {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.5);
            width: 10rem;
            height: 52rem;
            top: 8rem;
            left: 61rem;
            transform: rotate(3deg);
            border-bottom: none;
            border-radius: 10rem 6rem 2rem 2rem;
        }

        .hand4 {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.5);
            width: 8rem;
            height: 32rem;
            top: 30rem;
            left: 77rem;
            transform: rotate(12deg);
            border-bottom: none;
            border-radius: 10rem 6rem 2rem 2rem;
        }

        .hand5 {
            position: absolute;
            top: 52rem;
            left: 8rem;
            transform: rotate(-50deg);
            transition: all ease .2s;

            .hand5-item1 {
                width: 12rem;
                height: 18rem;
                border: 1px solid rgba(255, 255, 255, 0.6);
                transform: rotate(40deg);
                position: relative;
                left: 5rem;
                bottom: -4rem;
                border-bottom: none;
                border-radius: 1rem 10rem 2rem 0;
                border-top: 1px solid rgba(255, 255, 255, 0.9);
                border-right: 1px solid rgba(255, 255, 255, 0.9);
            }

            .hand5-item2 {
                width: 13rem;
                height: 14rem;
                border: 1px solid rgba(255, 255, 255, 0.6);
                border-bottom: none;
            }
        }

        .hand5-1 {
            top: 20rem;
            left: 20rem;
            transform: rotate(20deg);
        }

        .hand5-2 {
            top: 10rem;
            left: 20rem;
            transform: rotate(12deg);
        }

        .hand5-3 {
            top: 2rem;
            left: 36rem;
            transform: rotate(16deg);
        }

        .hand5-4 {
            top: 20rem;
            left: 48rem;
            transform: rotate(40deg);
        }

        .hand5-5 {
            top: 36rem;
            left: 34rem;
            transform: rotate(40deg);
        }

        .hand5-6 {
            top: 22rem;
            left: 34rem;
            transform: rotate(24deg);
        }

        .hand5-7 {
            top: 6rem;
            left: 50rem;
            transform: rotate(20deg);
        }

        .hand5-8 {
            top: 42rem;
            left: 20rem;
            transform: rotate(20deg);
        }

        .hand5-9 {
            top: 38rem;
            left: 48rem;
            transform: rotate(40deg);
        }
    }
}
</style>