<template>
  <div class="table-container">
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
            <!-- Conditionally render an image if the header is 'Image' -->
            <img v-if="cellIndex === 'Image'" :src="value" alt="Image">
            <!-- Conditionally render a link if the row has a 'link' property and it's the title column -->
            <a v-else-if="cellIndex === 'Title' && row.link" :href="row.link">{{ value }}</a>
            <!-- Default rendering for other cases -->
            <span v-else>{{ value }}</span>
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
      return this.data.map(row => ({
        ...row
      }));
    },
  },
};
</script>

<style scoped>

.table-container{
  display: flex;
  flex-direction: column;
}

table {
  flex: 1;
  border-collapse: separate;
  border-spacing: 0;
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #fff;
}

th, td {
  padding: 12px 20px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
}

th {
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;
}

tr:hover {
  background-color: #f0f0f0;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

img {
  width: auto;
  height: 50px;
  object-fit: cover;
}

a {
  color: #1a0dab;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>


