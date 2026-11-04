
import { defineNuxtPlugin } from '#app'
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, LineChart } from 'echarts/charts'
import {
  GraphicComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import VChart from 'vue-echarts'

echarts.use([
  CanvasRenderer,
  PieChart,
  LineChart,
  GraphicComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
])

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VChart', VChart)
})
