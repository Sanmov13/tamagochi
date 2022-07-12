const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function () {
        if (this.meal === 0 || this.energy === 0 || this.mood === 0) {
            console.log(`${this.name} Умер`)
          }
        return  `${this.name},  ${this.meal},  ${this.energy},  ${this.mood}.`
        },
    serName: function (pet) {
        return this.name = pet
    },

    eat: function() {
        if (this.meal < 3) {
            console.log('Я голоден')
          }
          else {
            console.log('Я не голоден')
          }
        return [this.meal+=1, this.mood-=1]
      },

      sleep: function() {
        if (this.energy < 3) {
            console.log('Я хочу спать')
          }
          else {
            console.log('Я не хочу спать')
          }
        return [this.energy+=1, this.meal-=1]
      },

      play: function() {
        if (this.mood < 3) {
            console.log('Мне скучно')
          }
         else {
           console.log('Мне не скучно')
         }
        return [this.mood+=1, this.energy-=1]
      }

  }
