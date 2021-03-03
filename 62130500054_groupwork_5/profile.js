const constraints = {
  firstName: {
    presence: { message: " is required" },
  },
  lastName: {
    presence: { message: " is required" },
  },
  description: {
    presence: { message: " is required" },
  },
};

let app = Vue.createApp({
  data() {
    return {
      firstName: null,
      lastName: null,
      imageUrl: "./images/panus.png",
      githubUrl: "https://github.com/panus2544",
      follower: 1000,
      rating: 999,
      description: null,
      errors: null,
    };
  },
  methods: {
    clear() {
      this.firstName = null;
      this.lastName = null;
      this.description = null;
    },
    checkForm() {
      this.errors = validate(
        {
          firstName: this.firstName,
          lastName: this.lastName,
          description: this.description,
        },
        constraints
      );
      console.log(this.errors);

      if (!this.errors) {
        Swal.fire(
          "Good job!",
          "Your Profile is updated successfully.",
          "success"
        );
      }
    },
  },
  computed: {
    
  },
});

// app.component('my-button', {
//     emits: ['whenclick'], //optional
//     template: `
//         <button @click="handleClick">Click Me!</button>
//     `,
//     methods: {
//         handleClick(){
//             this.$emit('whenclick')
//         }
//     },
// })

app.mount("#app");
