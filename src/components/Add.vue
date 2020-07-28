<template>
    <div class="container">
        <div class="card note-card">
            <div class="card-header">
                <div class="card-header-title title">
                    <div class="title-content">
                        <p v-if="addMode"> Add Note</p>
                        <p v-else>Update Note</p>
                    </div>
                </div>
                <div class="card-content">
                    <div class="columns">
                        <div class="columns is-12">
                        <template>
                          <selection>
                            <b-field label="Note Header">
                                <b-input v-model="note.content.title" type="input" placeholder="Note header"           />
                            </b-field>
                           <b-field label="Description">
                           <b-input v-model="note.content.description" type="textarea" placeholder="Note description"           />
                            </b-field>
                            <div class="buttons">
                            <b-button class="button is-default" @click="cancelNote"> Cancel</b-button>
                            <b-button v-if="addMode" class="button is-primary" @click="addNote">Add</b-button>
                            <b-button v-else class="button is-primary" @click="updateNote">Update</b-button>
                            </div>
                          </selection>
                        </template>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
        props:{
            addMode:{
                type:Boolean,
                required:false,
                default(){
                    return true;
                }
            },
            note:{
                type:Object,
                required:false,
                default(){
                    return{
                        content:{
                        title:"",
                        description:"",
                        isComplated:false
                        }
                    };
                }
            }

            },
        methods:{
            addNote(){
            this.$emit("add",this.note)
            },
            updateNote(){
            this.$emit("update",this.note)
            },
            cancelNote(){
            this.$emit("cancel")
            }
        }
    };
</script>

<style scoped>

</style>