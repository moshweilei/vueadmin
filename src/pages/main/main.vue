<template>
  <div>
    <div class="Echarts">
      <div id="main" style="width: 600px;height:400px;"></div>
      <div id="maintwo" style="width: 600px;height:400px;"></div>
    </div>
    <div class="xx">
      <div class="big_from">
        <div class="from">学生姓名：<el-input v-model="name" placeholder="请输入内容" class="from_input"></el-input>
        </div>
        <div class="from"> 身高：<el-input v-model="height" placeholder="请输入内容" class="from_input"></el-input>
        </div>
        <div class="from"> 体重：<el-input v-model="weight" placeholder="请输入内容" class="from_input"></el-input>
        </div>
        <div class="from">
          <el-button type="primary" plain class="from_input" @click="SubmitTheStudent()">提交</el-button>
        </div>

      </div>
      <div class="big_from" style="margin-top:20px" v-for="(item,index) in from" :key="index">
        <div class="from">学生姓名：{{item.name}}</div>
        <div class="from">身高：{{item.height}}</div>
        <div class="from">体重：{{item.weight}}</div>
        <el-button type="danger" class="from_input" @click="delect(item._id)">删除</el-button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      name: "",
      height: "",
      weight: "",
      from: []
    }
  },
  created () {
    this.getstudent()
  },
  mounted () {
  },
  methods: {
    open3 () {
      this.$message({
        message: '信息不能为空',
        type: 'warning'
      });
    },
    open2 () {
      this.$message({
        message: '恭喜你，上传成功',
        type: 'success'
      });
    },
    open1 () {
      this.$message({
        message: '恭喜你，删除成功',
        type: 'success'
      });
    },

    async getstudent () {
      var that = this;
      await this.$http.get('/getstudent')
        .then(function (res) {
          console.log(res)
          if (res.code == 200) {
            that.myEcharts(res.data);
            that.myEchartstwo(res.data);
            that.from = res.data;
          }

        })
        .catch(function (error) {
          console.log(error);
        });
    },

    myEchartstwo (data) {
      let MYdata = []
      data.forEach(Element => {
        MYdata.push({
          name: Element.name,
          value: Element.weight
        })
      })
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('maintwo'));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '重量',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: MYdata
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    myEcharts (data) {
      let xAxis = [];
      let series = [];
      data.forEach(element => {
        xAxis.push(element.name)
        series.push(element.weight)
      });

      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: ''
        },
        tooltip: {},

        xAxis: {
          data: xAxis
        },
        yAxis: {},
        series: [{
          name: '重量',
          type: 'bar',
          data: series
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
}
</script>
<style scoped >
.Echarts {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.xx {
  height: 120px;
}
</style>