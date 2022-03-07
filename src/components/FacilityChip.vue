<template>
  <div class="uk-card uk-card-default">
    <div class="uk-child-width-1-2@s" uk-grid>
      <div>
        <h5 class="chip heading">{{ facility_name }}</h5>
      </div>
      <div>
        <div class="uk-child-width-1-2@s action-frame" uk-grid>
          <div>
            <h5 class="action">
              <a uk-icon="icon: pencil" @click="openEditor"></a>
            </h5>
          </div>
          <div>
            <h5 class="action">
              <a uk-icon="icon: trash" @click="openDeleter"></a>
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isEditorOpen === true">
      <hr />
      <div class="uk-container">
        <form
          class="uk-grid-small uk-padding"
          @submit.prevent="submitForm"
          uk-grid
        >
          <div class="uk-width-1-1 name-field">
            <input
              class="uk-input"
              type="text"
              v-model="name"
              placeholder="Enter Facility Name"
              required
            />
          </div>
          <div class="uk-width-1-2 name-field">
            <input
              class="uk-input"
              type="number"
              v-model="total"
              placeholder="Total Price"
              required
            />
          </div>
          <div class="uk-width-1-2 name-field">
            <input
              class="uk-input"
              type="text"
              v-model="cut"
              placeholder="Cut Price"
              required
            />
          </div>
           <div class="uk-width-1-2@s">
              <div uk-form-custom="target: true">
                <input type="file" @change="previewFile" accept=".docx,.doc,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
                <input
                  class="uk-input uk-form-width-medium"
                  type="text"
                  placeholder="Select file"
                  disabled
                />
              </div>
            </div>
          <div class="uk-width-1-1 name-field">
            <button
              class="uk-button uk-button-primary"
              @click="makeupdateRequest"
              :disabled="$store.state.facilities.isUpdating"
            >
              <div
                v-if="$store.state.facilities.isUpdating"
                uk-spinner="ratio :0.8"
              ></div>
              <div v-else>Update</div>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="uk-container"
      v-if="isDeleterOpen === true && $store.state.facilities.isDeleted === false"
    >
      <hr />
      <h5 style="text-align: center">
        Are You Sure To Delete {{ facility_name }}
      </h5>
      <p class="uk-align-center" uk-margin>
        <button
          class="uk-button uk-button-default uk-align-center"
          @click="openDeleter"
          href="#"
        >
          Cancel
        </button>
        <button
          class="uk-button uk-button-danger uk-align-center"
          @click="makedeleteRequest"
          :disabled="$store.state.facilities.isDeleting"
        >
          <div
            v-if="$store.state.facilities.isDeleting"
            uk-spinner="ratio :0.8"
          ></div>
          <div v-else>Delete</div>
        </button>
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.facility_name,
      cut: this.fcut,
      total: this.ftotal,
      isEditorOpen: false,
      isDeleterOpen: false,
      file_name:null,
      file_path:null
    };
  },
  props: {
    id: null,
    facility_name: null,
    fcut: null,
    ftotal: null,
  },
  methods: {
    previewFile(event){
        console.log(event.target.files)
        this.file_name = event.target.files[0].name;
        this.file_path = event.target.files[0].path;
    },   
    openEditor() {
      this.isEditorOpen = !this.isEditorOpen;
    },
    openDeleter() {
      this.isDeleterOpen = !this.isDeleterOpen;
      this.$store.state.facilities.isDeleted = false;
    },
    makedeleteRequest() {
      this.$store.dispatch({
        type: "facilities/delete_facility",
        payload: {
          id: this.id,
        },
      });
    },
    makeupdateRequest() {  
      this.$store.dispatch({
        type: "facilities/update_facility",
        payload: {
          id: this.id,
          name: this.name,
          cut: this.cut,
          total: this.total,
          file_path:this.file_path
        },
      });
    },
  },
};
</script>

<style scoped>
.chip {
  padding: 7px;
  transition: width 2s, height 4s;
}

.uk-card {
  margin: 7px;
  transition: width 2s, height 4s;
}

.heading {
  text-align: left;
  margin-left: 5px;
}

.action {
  padding: 7px;
  margin: 1px;
}

.action-frame {
  margin: 0px;
}
</style>
