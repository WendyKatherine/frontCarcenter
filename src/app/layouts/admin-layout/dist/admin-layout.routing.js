"use strict";
exports.__esModule = true;
exports.AdminLayoutRoutes = void 0;
var home_component_1 = require("../../home/home.component");
var about_component_1 = require("../../about/about.component");
var projects_component_1 = require("../../projects/projects.component");
var designs_component_1 = require("../../designs/designs.component");
var contact_component_1 = require("../../contact/contact.component");
var createproject_component_1 = require("../../projects/createproject/createproject.component");
var detailproject_component_1 = require("../../projects/detailproject/detailproject.component");
var editproject_component_1 = require("../../projects/editproject/editproject.component");
var createdesign_component_1 = require("../../designs/createdesign/createdesign.component");
var detaildesign_component_1 = require("../../designs/detaildesign/detaildesign.component");
var editdesign_component_1 = require("../../designs/editdesign/editdesign.component");
exports.AdminLayoutRoutes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'Designs',
    //         component: DesignsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'designs', component: designs_component_1.DesignsComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'create-project', component: createproject_component_1.CreateprojectComponent },
    { path: 'proyecto/:id', component: detailproject_component_1.DetailprojectComponent },
    { path: 'editar-proyecto/:id', component: editproject_component_1.EditprojectComponent },
    { path: 'create-design', component: createdesign_component_1.CreatedesignComponent },
    { path: 'design/:id', component: detaildesign_component_1.DetaildesignComponent },
    { path: 'editar-design/:id', component: editdesign_component_1.EditdesignComponent },
];
