const constraints = {
  firstName: {
    presence: { message: " is required" },
    length: { minimun: 1 },
  },
  lastName: {
    presence: { message: " is required" },
    length: { minimun: 1 },
  },
  description: {
    presence: { message: " is required" },
    length: { minimun: 1 },
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
      errors: "",
    };
  },
  methods: {
    clear() {
      this.firstName = null;
      this.lastName = null;
      this.description = null;
      this.errors = "";
    },
    checkForm() {
      let condition = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
      };
      this.errors = validate(condition, constraints);

      if (!this.errors) {
        Swal.fire(
          "Good job!",
          "Your Profile is updated successfully.",
          "success"
        );
      }
    },
  },
  computed: {},
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
