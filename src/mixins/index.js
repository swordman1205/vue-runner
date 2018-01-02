export default {
  methods: {
    fieldClassName(field) {
      if (!field) {
        return '';
      }
      if ((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if ((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-error';
      }
      return '';
    },
  },
};
