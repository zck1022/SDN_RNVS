<template>
  <div class="main-box" ref="BOX"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Topo",
  data() {
    return {
      htconfig: {
        Style: {
          "edge.color": "black",
          "edge.width": 2,
          flow: true,
          "edge.offset": 0,
          "flow.element.background": "#21a675",
          "flow.element.count": 5,
          "flow.count": 0,
          "flow.step": 3,
          "flow.element.max": 10,
          "flow.element.shadow.visible": false
        }
      },
      graph: {},
      dm: {},
      view: {},
      updatingNumber: "",
      textObject: {},
      imageSetting: {
        serverNormal: {
          type: "serverNormal",
          width: 25,
          height: 40,
          base64:
            "data:image/png;base64,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"
        },
        pcNormal: {
          type: "pcNormal",
          width: 35,
          height: 35,
          base64:
            "data:image/png;base64,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"
        },
        switcherNormal: {
          type: "switcherNormal",
          width: 40,
          height: 24,
          base64:
            "data:image/png;base64,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"
        },
        cameraNormal: {
          type: "cameraNormal",
          width: 40,
          height: 24,
          base64:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAAB1CAYAAAAx3BFGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFa8AABXWAfpGBfQAAA5qSURBVHhe7Z0JcBPXGccJR7GxudImOOMmoYkNNhTLB5ZkyZd8yZZlWfLt+ATbwRhwwFzBHopT6gQSEo54CCTQEgLD0ExDptQMTTI0HSbQnJ1MJiENkx5pm6ENgRAIxRj79X3rlSPJT2utkFYr6fvP/EaWtXorvf3p7XtvV6txzpKfr6oym7V9JlPKVwUFSoJ4BqMx5UpxcerZgoLk1uJixQy+ujHuJC8vKaa4WHuupcV0paenjezd20UOH+5BPMS+fRvJU0+1k+XLy74zm9P+azAk5/NVjxGToqKU7tLSzK937lzDrGjEs4C4dXX5l0tK0l7JyMgI4TcDZqyAqK2tlqsHD25mViziPbq6Fg1YLKkn+U2BEQrs+svLdZd6e9eSrVuXkp6eFkRCnn56BWltLb5iNKbW8ZsEw0p7e9WstjbT5a6uGk7U3bvXkRde6EIkZNeuDrJpUyOpqND9h/ZhI/hNg3FMe7v5dx0dlf2HDv2CuYtCpGH//o2ks7NmqLQ0fTe/aTCOgWkUGJ2yKhCRll27VhPad73IbxqMY2AeFaen5IPRmHID51+dBCaqWZWG+AazWXtVr1fN5jcPxjYoq7xAWQWCssoLlFUgKKu8QFkFgrLKC5RVICirvEBZBYKyyguUVSAoq7xAWQWCssoLlFUgKKtv2bJlBVm2rGyEzExFf1JS9I6EhAe7XUWhiG7kN2dgB2X1LXq9kuTkJBKDQekWev1Ckpw89yq/OQM7KKtvAVnLyzPI4sX5blFbm4OyItKAsooIyupbUFYRQVl9i4dkJQkJUV5DoXjQzOvi26CsvqWwUEO02vkkIyOOIy1tAUlN/ekA3NqSns6GLkvU6limyJ4ABnEw48Dr4tugrL7l+ee7uOkrK/n5yddVqpgqaNGgxTUa1USjmc/97QylMpZrAa2CqVTfywtC296KBWVFnGI9KGCVD2QcSzSQE2VFJAdlFQjKKi9QVoGgrPICZRWIK7L29q4jzzzTgUiAyaS9DldwRFkZGUvW9esbSGNjEVm6tAKRgNbWcrJkSfkAysqIM1nhCnfNzWaybdsG8vbbJxCJQVkZYckKu/2GBiM5enQ3syIR74OyMsKS9ZFHqkldnYHulioRH4GyMuJM1j17epifeEQaUFZGUFZ5grIygrLKE5SVEZRVnqCsjKCs8iTYZIXLfFIXzYWFqqfobb/JlPJXcNMK9wMh8AfKKj/EyOpNvCkrCGo0pqwpKkr5d2Gh+kZtbe43K1eWwCFn0tOzmDz77HIOcJR7gjdlfeONl0lzcw1HW1sjOX36Ve7/LS1lI58YhI2trCpVDHffVygUUSs5WTwUOPehuFjzstGovrZkifHaE080jYgJlJSk2d2H+uCeCH94S9aNG1eRO+64A1ZExo8fT557bgv3f1gnRjggiVXWsjI9/1/X8+GH79Pt2GC3PeAgT3W1/jy34X0U+Akri0V7ef36SrJjxzKyb9+j5PjxPeTUqSP0NfbJQ9YJEyagrCICssIuGK4p4ElZKytzufr3AYNU1H+2tZmugaQnT/6KfPzxW+T8+Q/sQFn9MKdOvUa3wU6Od9/9E/9f1+NM1vp6A+nsfEhSVqywkIqKzCHoh7700mYq6ZlRklrxK1m/+OJvXEULceHCl9yycMt63JZr177llrXNe++dIYcOPc9x7txH/H+/T1/fb0Yev3TpIv9fwpXFWoct1vKOHDlAamqKBOnoeJj09/dzy7saWP7YsSPca4Nb1vuDwGtxJuvp07/1Ot+Laua+gbt37xr6oTvJFNQWv5LVYFARrXaBU9LS4khpaTa3LNzCfdZygE6XQLq713LLWrNjcxdZnZNFtkcncbQV6MiRfbu5x2DDL1pUQpKT55Ho6EgOi0VHzpx5k3scyoIyWeuyAl+tBmFBxtmzI8idd05zSm7uwpEPniuBD3JpaRaJj4/mXhvcVlTomWUIyWrb6nmTZcuKOVEPH36CfPbZe0w5HfErWfkX5pTQ0MnEaNRyy8It3GctB0RG/oisX7+MWxby+75j5LG0TPLxuAQ7QF5obTdtWk0Fu8eujEmTJnDCQgsLZUGZto87AsKCKCArCMlaxopYWWtri8i0aVPsyggLC6GDJsOoFtrXsq5ZU8ENDnt726moo6WE/33yydvkgw/eoK+tbwSUlc+G5YvJK3cljpL10D1J5PHOlaSwUM3NWjiWAy0tdA18KSu0qkZjKrOcggLNqO6Mr2WtrNTRPVEDOXv2+IigMKCCUT/0W21ldARlpdm0eik5OitplKwHIpPItp8/SoqKUrmW1LEcjSaOvPbacdnKajBoyeef/4Vfcji+lPXhhws5jh3bxUkKLeiRI1vsBBQCZaX5w+snyHqdbpSsj+izuI37+ONdJCrqx3ZlTJ48ifYTc2TRDYD+9IwZ4XZlwP2mpnJZdQNKS9O5I1CffvoO15LaiucKfiWrdXDDIjb2PjtZ4T5rOSAxMdpOVsj+3m1ksVHHDa62zVeROmMGOfnqy9xjsMGXLq0hOTkq7vmw+zebM0ZaLSgLynRcjy1ZWQkjssbFPcBcxkpeXrIoWWFZ6J9CSw/Ph1u4zyrDV7KuWlXK9VVffHEjh610ruI3slqnZYSwjs7hlvW4LbDRHAO7VHjs6NEDzA1tndqCfqrt1BBIa1u2M+A5rrw2eK9iAx8o6JLA8+HWsUW1xleyLlqkJ3B831Y2sfiNrBjPxFey1tRkkw0bHrKTTSwoa5DFV7JaZwFsZROLrGStrTVwLwDxLps2rbDbHlLICqf3Pflki51sYpGVrIhvkELWqqos8rOf1dnJJhaUFZFE1oaGPNLRUW4nm1hQVkQSWZcsMZLmZoOdbGJBWRFJZF23rpJYLKncidW2wokBZUUkkRWor88ja9dW2AknBpQVkUxW61EsW+HEgLIikskKNDUVcCde20rnKigrIqmsgLsHCFBWRHJZ4QTs6uosu2sAuALKikguKwDCVlWJa2FRVoSTtbo6b6i8PH1AWtIGiou1Q+3t5n5XprRQVoSTtaoq7196vSpTanJzU9LNZu0uiyXt67EOxzqV1WBQDhw8uBllDQKGW1bfXpElLy8pxmTSnKUt7shVWWzFBJzKajKlfLV3bxfKGgTIQVZr8vOVauv1rpqbDd9Ba7t9e6uwrLRp7uvpaUNZgwA5yWrN8KUuk1uhtTUYVNepqN+AvO3tFgKAxCOywg+EtbSYrqCsgY8cZXWMwZAcD/JSugGQmPI+7ffO5hagI7VzO3euQVkDHH+QdcyAtbT5vWwdaKGsgUlAyAopKlKvaGoq/PbAgW6UNUAJGFkhhYWqFtrCXmxtLUFZA5CAkhVCO7gRFRU5l1HWwCPgZIVUV+edQFkDD5RVAJRVXqCsAqCs8gJlFQBkheudgqi2v9aC+AaUVQD43SsQ1AprGUQ6UFbEb0BZEb8BZUX8BpQV8RsCVtZVq+rJ1q3rkACis3NJ4MnKn1PInU/oabKzE/6s1y8cgt8l9QZ0HSQjI45kZcX/3XHdciA9fcGemJh7b8HvDaSlwY/QeQf47dekpOiTjuuH70PxmxkjFI0m9pe0wgZtf8/e02RnJw6qVPMf41cp18yYNi3sraioyMHa2mzm+7hdMjMVZOrU0D/y68OIycKFc9pAJFbFeoriYi1JSZn3Or9K2Sc0dGJbeHjodaNRzXw/t0NFRQYJCfnBVX5VGFeTlDQnhkp0A37Jg1WxnqCyMpOo1bH/yMi4P4Rfrb8kIjx88hdxcT8Zggvxst6bu4SFhdyk5Q9/HQQzdkAelWruRfgVD1aFegL4MVu1OuYbheL+Gfxq/S5hYaFb7r57Zn9paRrzPbpDdHTkIC26cXgNmDEDu2XYPbMq0xM0NOQSjWbedWi9+VX6c9S0NbyoUsUMsd6rWGCgRcs7wZeNEYoU/VQ6ur5JW+5SfpWBkJDp06ccvffeuwZud/CF/VYXI0U/NScncVCtnt/JrzKgQlvEmunTw2578DVp0sRbtDi/7R55PVL0U+lGHEpJiTnKrzJQMxsGX3R37na34L777gZZzcPFYUbF2/3UsrJ0olLFnuNXF/ChLeyb7gpL+7/QFdjPF4Wxjbf7qdXVOphL/dKfR/7uBA4iwEQ/q06EMJs1ZMqUyRf4YjDWeLufWl+fQ0WNvapQzA3GucMIKl2/O3Ox2G91CLR0anXsV97qp8IHIDV1QX9iYpSaX2XQBfqv7gy4sN9qExAVds2wi2ZVlifQ6eJvKZVzF/OrDMpA3xP6oKz6EYJ2zWjrOmE7X0zwBkb+VNTP4HePWBXlCfLzFw6q1fN28KsM5jTCUSlWHQkBl4wMDw8NrFMD3YlaHdNnMmk8csSFhcWipSPaeW/xqwv2xM+cGX6TVU9CQD+XtqwD9Pn+dt6E56JUzlmVm+u9kb8fn5zircyGk1NYdTUWtAsBskYMFxOEof2n897a/QfrFNUYcUvWoD/smpx8fwQd8PR7Y5oKRXUat2TNzk6gfdYp7/BlBF+UypiXvHHSMMivUsXeCNK51LHilqxBPxtAW9UL3piqooM1Qsv+Nb8ajH0yZ82aOcCqNyGCep4VBjwJCdFeGVhlZipuKRQP4gQ2O27JOnXqFPjGQCCc7ys+CkV0vEYT69aodCzooO1mgJxI7Y2IlhWmrcaPHw/fGAjOJCQ8UKXTJXilZYWvEPOrwYyOGXbprHpzRtCfyJKcPGe/NwZXcF4BLfsSvxrM6Ig+ghX0X8lWKmM/gnNKWZVzO5SUpMJMQPBOsYwd0bLCxTTo8x4dfnoQhvYp/wen67Eq53YoLFTBVUTwhAvnES1rZOQPYSYgf/jpQRaYqKeyiuo3uQr0g6E/zK8KMzrd0Kdn1Z0zgvowK0zW0wq7BZXmaWir2o8HAwTTHR4eOggzAq4yceKEG/xzMRhJA4ef4cJqYgiQacBx4/4PyHgE4c1yw8sAAAAASUVORK5CYII="
        }
      }
    };
  },
  methods: {
    init() {
      // 在index.html中引用hightopo.js，所以在全局变量中能调用到ht这个对象
      window.graph = new window.ht.graph.GraphView();
      // 调用setOriginalImage方法设置图元
      this.setOriginalImage();
      // 把全局中的graph对象复制给这个vue对象中的graph对象
      this.graph = window.graph;
      // 创建全局datamodel
      window.dm = this.graph.dm();
      // datamodel复制给这个vue对象中的datamodel
      this.dm = window.dm;
      // 调用graph中的getView方法，渲染链路节点
      this.view = this.graph.getView();
      // 将链路节点绑到指定元素上
      this.$refs.BOX.appendChild(this.view);
      // 留个class名，但是在本vue对象中用这个clas来修改样式似乎做不到
      this.view.className = "view";
      // 设置宽高，让整个元素撑起来
      this.view.style = "height:100%;width:100%;";
      setInterval(this.requestData, 1000);
    },
    setAll() {
      //  开始创建设备
      for (let index = 0; index < this.textObject.devices.length; index++) {
        this.create(
          this.textObject.devices[index].tag,
          this.textObject.devices[index].type,
          this.textObject.devices[index].x,
          this.textObject.devices[index].y
        );
      }

      //  开始创建链路
      for (let index = 0; index < this.textObject.links[1].length; index++) {
        this.connect(
          this.textObject.links[1][index].device1,
          this.textObject.links[1][index].device2
        );
      }

      //  开始设置异常链路
      for (let index = 0; index < this.textObject.links[2].length; index++) {
        this.setAbnormalLink(
          this.textObject.links[2][index].device1,
          this.textObject.links[2][index].device2
        );
      }
      //  开始设置flow
      for (
        let index = 0;
        index < this.textObject.links[0].flowLinks[0].length - 1;
        index++
      ) {
        this.setFlowLink(
          this.textObject.links[0].flowLinks[0][index],
          this.textObject.links[0].flowLinks[0][index + 1]
        );
      }
      for (
        let index = 0;
        index < this.textObject.links[0].flowLinks[1].length - 1;
        index++
      ) {
        this.setFlowLink(
          this.textObject.links[0].flowLinks[1][index],
          this.textObject.links[0].flowLinks[1][index + 1]
        );
      }
      // flow的一些操作
      // 调用graph的enableFlow方法使链路流动起来
      this.graph.enableFlow();
      // 添加事件监听器，视图大小发生调整时更新页面(.iv())
      window.addEventListener("resize", function() {
        this.graph.iv();
      });
    },
    create(tag, type, x, y) {
      // 创建设备
      let device = new window.ht.Node();
      device.setImage(type);
      device.setStyle("note", tag);
      // 设置坐标，图层宽高修改时可以在这里修改相应的换算宽高
      x = (x / 1520) * 1340;
      y = (y / 790) * 690;
      device.setPosition(x, y);
      this.dm.add(device);
      device.setTag(tag);
    },
    connect(tag1, tag2) {
      let device1 = this.dm.getDataByTag(tag1);
      let device2 = this.dm.getDataByTag(tag2);
      let edge = new window.ht.Edge(device1, device2);
      this.dm.add(edge);
      var tag3 = tag1 + "-" + tag2;
      edge.setTag(tag3);
      edge.s({
        "edge.color": "black",
        "edge.pattern": [10, 2]
      });
    },
    setP(tag, x, y) {
      let device = this.dm.getDataByTag(tag);
      x = (x / 1520) * 1260;
      y = (y / 790) * 740;
      device.setPosition(x, y);
    },
    setAbnormalLink(tag1, tag2) {
      let tag = tag1 + "-" + tag2;
      var edge = this.dm.getDataByTag(tag);
      if (!edge) {
        tag = tag2 + "-" + tag1;
        edge = this.dm.getDataByTag(tag);
      }
      edge.s({
        "edge.color": "#f05654",
        "edge.pattern": [10, 2]
      });
    },
    setFlowLink(tag1, tag2) {
      let tag = tag1 + "-" + tag2;
      let edge = this.dm.getDataByTag(tag);
      if (!edge) {
        tag = tag2 + "-" + tag1;
        edge = this.dm.getDataByTag(tag);
      }
      this.dm.remove(edge);
      this.connect(tag1, tag2);
      tag = tag1 + "-" + tag2;
      edge = this.dm.getDataByTag(tag);
      edge.s({
        "edge.color": "#21a675",
        "flow.count": this.textObject.links[0].count
      });
    },
    requestData() {
      let that = this;
      axios
        .post("http://localhost:3000/test", {
          params: {
            updatingNumber: this.updatingNumber
          }
        })
        .then(function(response) {
          if (response.status === 200) {
            let res = response.data;
            if (res.statusNow == "ok") {
              that.dm.clear();
              that.textObject = res.textObject;
              that.updatingNumber = res.textObject.updatingNumber;
              that.setAll();
            }
          }
        })
        .catch(function(error) {
          console.log(error);
          alert("似乎发生了一点错误，请联系管理员");
        });
    },
    setOriginalImage() {
      let that = this;
      Object.keys(this.imageSetting).forEach(function(key) {
        window.ht.Default.setImage(
          that.imageSetting[key].type,
          that.imageSetting[key].width,
          that.imageSetting[key].height,
          that.imageSetting[key].base64
        );
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.main-box {
  height: 690px;
  width: 100%;
  background: url("../../../assets/images/back.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
