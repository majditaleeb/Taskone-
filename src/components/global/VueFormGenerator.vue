<template>
   <div class="container" id="app">
    <div class="panel panel-default">
      <div class="panel-heading">Formdiv>
      <div class="panel-body">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
       </div>
    </div>
  </div>
  </div>
</template>
<script>
import Vue from "vue";

 import VueFormGenerator from "vue-form-generator/dist/vfg-core.js";
  import "vue-form-generator/dist/vfg-core.css";
  Vue.use(VueFormGenerator);
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

export default {
  data () {
    return {
      model: {
        id: 1,
        lastName: '',
       
        skills: [],
        email: '',
        whens:[],
        questions:"",
  
        firstName:"",
        linkedIn:"",
        salary:"",
        mobile:'',
        mobileAlt:'',
        company:''

      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'number',
            label: 'ID Number ',
            model: 'id',
           
            disabled: false,
            required:true,
            validator : Number,
              featured: true,
          },
            {
            type: 'input',
                 disabled: false,
            inputType: 'text',
            label: ' First Name',
            model: 'firstName',
            placeholder: '',
            featured: true,
            required: true, 
       
         
          },
         
          {
            type: 'input',
                 disabled: false,
            inputType: 'text',
            label: ' Last Name',
            model: 'LastName',
            placeholder: 'Your name',
            featured: true,
            required: true, 
         
         
          },
      
          {
            disabled:"false",
            type: 'select',
            label: 'Skills',
            model: 'skills',
            values: ['Javascript', 'VueJS', 'CSS3', 'HTML5'],
            required:true
          },
          {
            type: 'input',
            inputType: 'email',
            label: 'E-mail',
            model: 'email',
            placeholder: 'User\'s e-mail address',
            required:true
       
          
          },

   {
            type: 'input',
            inputType: 'text',
            label: ' Linekdin profile',
            model: 'linkedIn',
            placeholder: 'put link here',
            featured: true,
                 disabled: false,
   
          
         
          },
               {
            type: 'input',
            inputType: 'number',
            label: 'Salary Requirments ',
            model: 'salary',
           
            disabled: false,
            required:true,
            validator : Number,
              featured: true,
          },
          {
            type: 'select',
            label: 'When can you start',
            model: 'whens',
            values: ['Now', 'Next Week', 'Next Month'],
            placeholder:'selcet when can start',
            required :true
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'mobile number ',
            model: 'mobile',
           
            disabled: false,
            required:true,
            validator : Number,
              featured: true,
             
          },
            {
            type: 'input',
            inputType: 'number',
            label: 'alternative mobile  number ',
            model: 'mobileAlt',
           
            disabled: false,
            required:true,
            validator : Number,
              featured: true,
             
          },
             {
            type: 'input',
            inputType: 'text',
            label: ' Last Company you worked for',
            model: 'company',
            placeholder: '',
            featured: true,
                 disabled: false,
   
          
         
          },
          {
    type: "textArea",
    label: " Comments / Questions",
    model: "questions",
    hint: "Max 500 characters",
    max: 500,
    placeholder: "type here ",
    rows: 4,
    validator:String
}






         
         
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  }
}
</script>
<style scoped>
html {
	font-family: Tahoma;
	font-size: 14px;
}

body {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 14px;
	line-height: 1.42857143;
	color: #333;
}

pre {
	overflow: auto;
}
	pre .string { color: #885800; }
	pre .number { color: blue; }
	pre .boolean { color: magenta; }
	pre .null { color: red; }
	pre .key { color: green; }    

h1 {
	text-align: center;
	font-size: 36px;
	margin-top: 20px;
	margin-bottom: 10px;
	font-weight: 500;
}

fieldset {
	border: 0;
}

.panel {
	margin-bottom: 20px;
	background-color: #fff;
	border: 1px solid transparent;
	border-radius: 4px;
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	border-color: #ddd;
}

.panel-heading {
	color: #333;
	background-color: #f5f5f5;
	border-color: #ddd;

	padding: 10px 15px;
	border-bottom: 1px solid transparent;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;        
}

.panel-body {
	padding: 15px;
}				

.field-checklist .wrapper {
	width: 100%;
	  }

</style>