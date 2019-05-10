<template lang="html">
  <div class="">
    <input style="position: absolute; top: 0px;" v-bind="position" type="number"  value=1>
    <canvas id="myCanvas" width="600" height="600"></canvas>
    <div class="table-container">
    <table id="bg-table">
  <tr>
    <th class="even">36</th>
    <th>35</th>
    <th class="even">34</th>
    <th>33</th>
    <th class="even">32</th>
    <th>31</th>
  </tr>
  <tr>
    <th>25</th>
    <th class="even">26</th>
    <th>27</th>
    <th class="even">28</th>
    <th>29</th>
    <th class="even">30</th>
  </tr>
  <tr>
    <th class="even">24</th>
    <th>23</th>
    <th class="even">22</th>
    <th>21</th>
    <th class="even">20</th>
    <th>19</th>
  </tr>
  <tr>
    <th>13</th>
    <th class="even">14</th>
    <th>15</th>
    <th class="even">16</th>
    <th>17</th>
    <th class="even">18</th>
  </tr>
  <tr>
    <th class="even">12</th>
    <th>11</th>
    <th class="even">10</th>
    <th>9</th>
    <th class="even">8</th>
    <th>7</th>
  </tr>
  <tr>
    <th>1</th>
    <th class="even">2</th>
    <th>3</th>
    <th class="even">4</th>
    <th>5</th>
    <th class="even">6</th>
  </tr>
</table>
    </div>
  </div>
</template>

<script>
import createRenderer from "../services/canvasRenderer.js";


export default {
  name: 'board',
  data(){
    return{
      position : 0,
    }
  },
  mounted(){
    const playerOne = new Image();
    playerOne.src = "https://img.icons8.com/color/48/000000/guest-male.png";


    const canvas = document.querySelector('#myCanvas');
    const ctx =  canvas.getContext("2d");
    const renderer = createRenderer(canvas,ctx);
    //let positon = 1;

    function update(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function loop(timestamp) {
      var progress = timestamp - lastRender;

      update(progress);
      renderer.drawPlayerOne(playerOne, this.positon);
      //positon += 0.1;

      lastRender = timestamp;
      window.requestAnimationFrame(loop);
    }

    var lastRender = 0
    window.requestAnimationFrame(loop)
  }
}
</script>

<style lang="css" scoped>

#bg-table{
  margin: 0 auto;
  background-color: green;
}

.table-container{

}

#myCanvas{
  padding: 0;
  margin: auto;
  display: block;
  position: absolute;
  top: 0;
  bottom: 70px;
  left: 0;
  right: 0;
  border: 10px solid pink;
}

table{
  border: 10px solid #945a05;
}

th{
  width: 100px;
  height: 100px;
  color: white;
  font-size: 2em;
  font-weight: bold;
  padding: 0px;
}



.even{
  background-color: white;
  color: green;
}

</style>
