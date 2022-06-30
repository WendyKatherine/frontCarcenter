"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminLayoutModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var admin_layout_routing_1 = require("./admin-layout.routing");
var home_component_1 = require("../../home/home.component");
var about_component_1 = require("../../about/about.component");
var projects_component_1 = require("../../projects/projects.component");
var designs_component_1 = require("../../designs/designs.component");
var contact_component_1 = require("../../contact/contact.component");
var button_1 = require("@angular/material/button");
var input_1 = require("@angular/material/input");
var core_2 = require("@angular/material/core");
var form_field_1 = require("@angular/material/form-field");
var tooltip_1 = require("@angular/material/tooltip");
var select_1 = require("@angular/material/select");
var safe_pipe_1 = require("../../safe.pipe");
var createproject_component_1 = require("../../projects/createproject/createproject.component");
var detailproject_component_1 = require("../../projects/detailproject/detailproject.component");
var editproject_component_1 = require("../../projects/editproject/editproject.component");
var createdesign_component_1 = require("../../designs/createdesign/createdesign.component");
var detaildesign_component_1 = require("../../designs/detaildesign/detaildesign.component");
var editdesign_component_1 = require("../../designs/editdesign/editdesign.component");
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(admin_layout_routing_1.AdminLayoutRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                button_1.MatButtonModule,
                core_2.MatRippleModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                tooltip_1.MatTooltipModule,
            ],
            declarations: [
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                projects_component_1.ProjectsComponent,
                designs_component_1.DesignsComponent,
                contact_component_1.ContactComponent,
                createproject_component_1.CreateprojectComponent,
                detailproject_component_1.DetailprojectComponent,
                editproject_component_1.EditprojectComponent,
                createdesign_component_1.CreatedesignComponent,
                detaildesign_component_1.DetaildesignComponent,
                editdesign_component_1.EditdesignComponent,
                safe_pipe_1.SafePipe,
            ],
            exports: [
                safe_pipe_1.SafePipe
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());
exports.AdminLayoutModule = AdminLayoutModule;
