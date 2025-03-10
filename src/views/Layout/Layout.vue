<!-- 页面容器 -->
<template>
    <div class="page-layout">
        <div class="result-box" v-if="loading">
            <div class="roll_bg"></div>
            <div class="roll_content result-con">
                <div class="result-item">
                    <div :style="{ 'text-shadow': `1px -1px 0 ${dataMap[item].color}, 1px -1px 0 ${dataMap[item].color}, -1px 1px 0 ${dataMap[item].color}, 1px 1px 0 ${dataMap[item].color}` }"
                        v-for="(item, i) in result" :key="i">{{ dataMap[item].name || '' }}</div>
                </div>


                <div class="result-btn">
                    <div class="btn showani" v-if="result.length == 3 && !dsLoading" @click="getDS">DeepSeek解析</div>
                    <div class="btn showani" @click="loading = false" v-if="result.length == 3 && !dsLoading">关闭</div>
                    <div v-else>&nbsp;</div>
                </div>
            </div>
        </div>

        <!-- 按钮 -->
        <div class="btns" v-if="!loading">
            <div class="btn" @click="openLearn">点我学习</div>
            <div class="btn" @click="openStart">点我开始</div>

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

    <Learn ref="learnRef" />
    <Start @start="start" @handleQ="handleQ" ref="startRef" />

    <!-- 加载框 -->
    <div class="ds-loading" v-if="dsLoading">
        DeepSeek 分析中...
    </div>

    <Result :rs="rsStr" ref="resultRef" />
</template>

<script setup>
import { ref } from 'vue'
import Learn from "./Learn.vue"
import Start from "./Start.vue"
import Result from "./Result.vue"

const curr = ref(0)
const dataMap = ref({
    1: { name: '大安', color: '#4CAF50' },
    2: { name: '留连', color: '#8B4513' },
    3: { name: '速喜', color: '#FF4500' },
    4: { name: '赤口', color: '#FFD700' },
    5: { name: '小吉', color: '#00BFFF' },
    6: { name: '空亡', color: '#808080' },
    7: { name: '病符', color: '#DAA520' },
    8: { name: '桃花', color: '#FF69B4' },
    9: { name: '天德', color: '#800080' },
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
            if (n == num) {
                clearInterval(interval)
                resolve(curr.value)
            }
        }, 200)
    })
}

const result = ref([])
const loading = ref(false)
const start = async arr => {
    loading.value = true
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


// setTimeout(() => {
//     start([17, 22, 13])
// }, 2000);

// 教程
const learnRef = ref()
const openLearn = () => {
    learnRef.value.open()
}
// 表单
const startRef = ref()
const openStart = () => {
    startRef.value.open()
}
// 结果
const resultRef = ref()
const openResult = () => {
    loading.value = false
    resultRef.value.open()
}


// sk-4c12b3744b804923ad13ceb8c20d03b2
const q = ref('')
const handleQ = val => q.value = val
const dsLoading = ref(false)
const rsStr = ref('')
const openLoadingPage = () => { // 打开加载
    if (interval) clearInterval(interval)
    const num = 999999
    let n = 0
    interval = setInterval(() => {
        count += 1
        n += 1
        curr.value = count % 9 == 0 ? 9 : count % 9
        if (n == num) {
            clearInterval(interval)
        }
    }, 200)
}
const closeLoadingPage = () => { // 关闭加载
    if (interval) clearInterval(interval)
    curr.value = 0
}



const getDS = () => {
    if (dsLoading.value) return
    let data = JSON.stringify({
        "messages": [
            {
                "content": "You are a helpful assistant",
                "role": "system"
            },
            {
                "content": `我想要咨询${q.value},卦象是(${dataMap.value[result.value[0]].name},${dataMap.value[result.value[1]].name},${dataMap.value[result.value[2]].name})请为我从发生发展结果来解析`,
                "role": "user"
            }
        ],
        "model": "deepseek-chat",
        "frequency_penalty": 0,
        "max_tokens": 2048,
        "presence_penalty": 0,
        "response_format": {
            "type": "text"
        },
        "stop": null,
        "stream": false,
        "stream_options": null,
        "temperature": 1,
        "top_p": 1,
        "tools": null,
        "tool_choice": "none",
        "logprobs": false,
        "top_logprobs": null
    });

    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer sk-4c12b3744b804923ad13ceb8c20d03b2'
        },
        body: data
    };
    openLoadingPage()
    dsLoading.value = true
    rsStr.value = ''
    fetch('https://api.deepseek.com/chat/completions', config)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('解析结果', data);

            try {
                rsStr.value = data.choices[0].message.content
                console.error(rsStr.value)
                closeLoadingPage()
                openResult()
            } catch {
                alert('这是天大的秘密，DeepSeek无法解析')
            }
        })
        .catch(error => {
            console.log(error);
            alert('这是天大的秘密，DeepSeek无法解析!!')
        })
        .finally(() => {
            dsLoading.value = false
        })
}
</script>

<style lang="less">
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

.ds-loading {
    position: fixed;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.page-layout {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .btns {
        position: absolute;
        top: 8rem;
        right: 8rem;

        .btn {
            margin-bottom: 6rem;
            text-decoration: underline;
            text-align: right;
        }
    }

    .hand {
        position: absolute;
        width: 90rem;
        height: 100rem;
        top: 50%;
        left: calc(50% - 5rem);
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

    .result-box {
        width: 98%;
        height: 30rem;
        overflow: hidden;
        position: absolute;
        z-index: 99;
        top: 2rem;
        left: 1%;

        .result-con {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: calc(100% - 1rem);
            height: calc(100% - 1rem);

            .result-item {
                font-size: 5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;

                div {
                    margin: 0 4rem;
                }
            }

            .result-btn {
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 100%;
                margin-top: 6rem;
                height: 4rem;

                .btn {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>