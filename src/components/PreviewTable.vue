<template>
    <div>
      <h2 v-if="title">{{ title }}</h2>
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td v-for="(value, cellIndex) in row" :key="cellIndex">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "PreviewTable",
    props: {
      data: {
        type: Array,
        required: true,
      },
      title: {
        type: String,
        default: "",
      },
    },
    computed: {
      headers() {
        // Get the headers from the keys of the first object in the data array
        return this.data.length ? Object.keys(this.data[0]) : [];
      },
      rows() {
        // Map data to rows
        return this.data;
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }
  th, td {
    padding: 8px;
  }
  h2 {
    margin-bottom: 10px;
  }
  </style>
  