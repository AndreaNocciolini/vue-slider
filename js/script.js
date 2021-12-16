// Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.

const app = new Vue (
    {
        el:`#app`,
        data : {
            counter: 0,
            images: [
                `image1.jpg`,
                `image2.jpg`,
                `image3.jpg`,
                `image4.jpg`,
            ]
        },
        methods: {
            next: function () {
              this.counter += 1
              if (this.counter > this.images.length-1) {
                this.counter = 0  
              }  
            },
            prev: function () {
              this.counter -= 1
              if (this.counter < 0) {
                this.counter = this.images.length-1  
              }
            },
            play: function() {
              this.timer = setInterval(this.next, 2300)  
            },
            stop: function() {
              clearInterval(this.timer)
            }
        },
        created(){
            this.play()
        }
        
    }
    
)