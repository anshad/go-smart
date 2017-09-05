<template>
    <div class="container" id="app-container">
        <b-tabs pills>
            <!-- Form -->
            <b-tab title="Form" active>
                <!-- form -->
                <div class="step row">                  
                    <h3 class="col-md-12">Section 1: Introduction</h3>
                    <div class="col-md-12">
                        <ul class="data-list">
                            <!-- title -->
                            <li class="row">
                                <div class="col-md-3 col-sm-3">
                                    <label>Title: {{ section.title }}</label>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                    <textarea class="form-control" v-model="section.title" rows="3"></textarea>
                                </div>
                            </li>
                            <!-- author name -->
                            <li class="row">
                                <div class="col-md-3 col-sm-3">
                                    <label>Author Name:</label>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                    <div class="input-group">
                                        <v-select v-model="section.authors" multiple :options="options"></v-select>
                                        <span class="input-group-addon">
                                            <button type="button" class="redbtn">
                                                <icon name="plus"></icon>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>                
                </div>
                <!-- form -->
            </b-tab>
            <!-- List -->
            <b-tab title="List" >
                <p>List Content</p>
            </b-tab>
            <!-- Report -->
            <b-tab title="Report">
                <p>Report Content</p>
            </b-tab>
            <!-- Export -->
            <b-tab title="Export">
                <p>Export Content</p>
            </b-tab>
        </b-tabs>
    </div>
</template>
<script src="./app.js"></script>
<style lang="scss" src="./app.scss"></style>
