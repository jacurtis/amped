import Vue from "vue";
import "@aws-amplify/ui-vue";
import Amplify from "aws-amplify";
import awsconfig from "~/aws-exports";

Amplify.configure(awsconfig);

Vue.use(Amplify)