(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"O+os":function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n("2Vo4"),a=n("LRne"),o=n("lJxs"),c=n("UXun"),r=n("eIep"),l=n("nYR2"),s=n("vkgz"),u=n("SxV6"),f=function(){function t(t,e,n,a,r,l){this.formBuilder=t,this.route=e,this.router=n,this.httpService=a,this.notificationService=r,this.listUrl=l,this.selectedDetailSource$=new i.a(null),this.selectedDetail$=this.selectedDetailSource$.asObservable(),this.isNew$=this.route.params.pipe(Object(o.a)(function(t){return"new"===t.id}),Object(c.a)(1)),this.loadingSource$=new i.a(!1),this.loading$=this.loadingSource$.asObservable(),this.detailForm=this.createForm(),this.loading=!0}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this.detailForm.disabled},enumerable:!1,configurable:!0}),t.prototype.save=function(){this.setDisabled(!0)},t.prototype.back=function(){var t=this;this.isNew$.pipe(Object(r.a)(function(e){return e?t.router.navigate([t.listUrl]):t.disabled?Object(a.a)(window.history.back()):(t.loadingSource$.next(!0),t.httpService.getDetail(t.selectedDetail.id).pipe(Object(l.a)(function(){return t.loadingSource$.next(!1)}),Object(s.a)(function(e){t.setDetail(e),t.setDisabled(!0)})))})).subscribe()},t.prototype.setDetail=function(t){this.selectedDetail=t,this.selectedDetailSource$.next(t),this.detailForm.patchValue(t)},t.prototype.edit=function(){this.setDisabled(!1)},t.prototype.setDisabled=function(t){t?this.detailForm.disable():this.detailForm.enable()},t.prototype.initialization=function(){var t=this;this.loadingSource$.next(!0),this.route.params.pipe(Object(s.a)(function(){return t.loadingSource$.next(!0)}),Object(r.a)(function(e){return"new"===e.id?Object(a.a)(null):t.httpService.getDetail(e.id)}),Object(u.a)()).subscribe({next:function(e){t.setDisabled(!!e),t.setDetail(e||{})},error:function(e){return t.notificationService.openErrorNotification(e)},complete:function(){return t.loadingSource$.next(!1)}})},t}()},"c4N/":function(t,e,n){"use strict";n.d(e,"a",function(){return Q});var i=n("0EQZ"),a=n("M9IT"),o=n("Dh3D"),c=n("2Vo4"),r=n("LRne"),l=n("VRyK"),s=n("JX91"),u=n("eIep"),f=n("3E0/"),p=n("lJxs"),g=n("JIr8"),b=n("fXoL"),m=n("ofXK"),h=n("+0xr"),d=n("Xa2L"),v=n("bSwM"),y=n("STbY"),D=n("bTqV"),C=n("NFeN"),S=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var i=Array(t),a=0;for(e=0;e<n;e++)for(var o=arguments[e],c=0,r=o.length;c<r;c++,a++)i[a]=o[c];return i};function O(t,e){1&t&&(b.Ub(0,"div",10),b.Pb(1,"mat-spinner"),b.Tb())}function w(t,e){if(1&t&&(b.Ub(0,"button",21),b.Ub(1,"mat-icon"),b.Ic(2,"more_vert"),b.Tb(),b.Tb()),2&t){b.gc();var n=b.vc(4),i=b.gc(4);b.mc("disabled",i.selection.isEmpty())("matMenuTriggerFor",n)}}function x(t,e){if(1&t&&(b.Ub(0,"mat-icon"),b.Ic(1),b.Tb()),2&t){var n=b.gc().$implicit;b.Db(1),b.Jc(n.icon)}}function I(t,e){if(1&t&&(b.Ub(0,"span"),b.Ic(1),b.Tb()),2&t){var n=b.gc().$implicit;b.Db(1),b.Jc(n.label)}}function k(t,e){if(1&t){var n=b.Vb();b.Ub(0,"button",22),b.cc("click",function(){b.xc(n);var t=e.$implicit,i=b.gc(5);return t.action(i.selection.selected)}),b.Gc(1,x,2,1,"mat-icon",23),b.Gc(2,I,2,1,"span",23),b.Tb()}if(2&t){var i=e.$implicit;b.Db(1),b.mc("ngIf",i.icon),b.Db(1),b.mc("ngIf",i.label)}}function j(t,e){if(1&t){var n=b.Vb();b.Ub(0,"div",16),b.Ub(1,"mat-checkbox",17),b.cc("change",function(t){b.xc(n);var e=b.gc(4);return t?e.masterToggle():null}),b.Tb(),b.Gc(2,w,3,2,"button",18),b.Ub(3,"mat-menu",null,19),b.Gc(5,k,3,2,"button",20),b.Tb(),b.Tb()}if(2&t){var i=b.gc(4);b.Db(1),b.mc("checked",i.selection.hasValue()&&i.isAllSelected())("indeterminate",i.selection.hasValue()&&!i.isAllSelected())("aria-label",i.checkboxLabel()),b.Db(1),b.mc("ngIf",i.tableConfig.selectOptions&&i.tableConfig.selectOptions.length),b.Db(3),b.mc("ngForOf",i.tableConfig.selectOptions)}}function $(t,e){if(1&t&&(b.Ub(0,"th",14),b.Gc(1,j,6,5,"div",15),b.Tb()),2&t){var n=b.gc(3);b.Db(1),b.mc("ngIf","multi"===n.tableConfig.selection)}}function T(t,e){if(1&t){var n=b.Vb();b.Ub(0,"td",24),b.Ub(1,"mat-checkbox",25),b.cc("click",function(t){return t.stopPropagation()})("change",function(t){b.xc(n);var i=e.$implicit,a=b.gc(3);return t?a.selection.toggle(i):null}),b.Tb(),b.Tb()}if(2&t){var i=e.$implicit,a=b.gc(3);b.Db(1),b.mc("checked",a.selection.isSelected(i))("aria-label",a.checkboxLabel(i))}}function L(t,e){1&t&&(b.Sb(0,11),b.Gc(1,$,2,1,"th",12),b.Gc(2,T,2,2,"td",13),b.Rb())}function U(t,e){1&t&&b.Qb(0)}function G(t,e){if(1&t&&(b.Ub(0,"th",33),b.Ic(1),b.hc(2,"async"),b.Tb()),2&t){var n=e.$implicit,i=b.gc(2).$implicit,a=b.gc(2);b.Db(1),b.Kc(" ",b.ic(2,1,a.getLabel(i,n))," ")}}function _(t,e){1&t&&b.Gc(0,G,3,3,"th",32)}function E(t,e){if(1&t&&(b.Ub(0,"th",35),b.Ic(1),b.hc(2,"async"),b.Tb()),2&t){var n=e.$implicit,i=b.gc(2).$implicit,a=b.gc(2);b.Db(1),b.Kc(" ",b.ic(2,1,a.getLabel(i,n))," ")}}function z(t,e){1&t&&b.Gc(0,E,3,3,"th",34)}function R(t,e){1&t&&b.Qb(0)}function F(t,e){1&t&&b.kc(0,0,["*ngTemplateOutlet","columnConfig.template || templates[columnConfig.name], context:{row: row}"])}var P=function(t){return{width:t}},H=function(t){return{row:t}};function M(t,e){if(1&t&&(b.Ub(0,"td",37),b.Gc(1,F,1,0,"ng-content",38),b.Tb()),2&t){var n=e.$implicit,i=b.gc(2).$implicit,a=b.gc(2);b.Dc("white-space",i.nowrap?"nowrap":"normal"),b.mc("ngStyle",b.qc(5,P,i.width)),b.Db(1),b.mc("ngTemplateOutlet",i.template||a.templates[i.name])("ngTemplateOutletContext",b.qc(7,H,n))}}function J(t,e){1&t&&b.Gc(0,M,2,9,"td",36)}function V(t,e){if(1&t&&(b.Ub(0,"td",37),b.Ic(1),b.Tb()),2&t){var n=e.$implicit,i=b.gc(2).$implicit,a=b.gc(2);b.mc("ngStyle",b.qc(2,P,i.width)),b.Db(1),b.Kc(" ",a.getContent(i,n)," ")}}function A(t,e){1&t&&b.Gc(0,V,2,4,"td",39)}function N(t,e){if(1&t&&(b.Sb(0,26),b.Gc(1,U,1,0,"ng-container",27),b.Gc(2,_,1,0,"ng-template",null,28,b.Hc),b.Gc(4,z,1,0,"ng-template",null,29,b.Hc),b.Gc(6,R,1,0,"ng-container",27),b.Gc(7,J,1,0,"ng-template",null,30,b.Hc),b.Gc(9,A,1,0,"ng-template",null,31,b.Hc),b.Rb()),2&t){var n=e.$implicit,i=e.index,a=b.vc(3),o=b.vc(5),c=b.vc(8),r=b.vc(10),l=b.gc(2);b.mc("matColumnDef",n.name)("sticky",i<l.tableConfig.stickyStart)("stickyEnd",i>l.tableConfig.stickyEnd),b.Db(1),b.mc("ngIf",n.sort)("ngIfThen",a)("ngIfElse",o),b.Db(5),b.mc("ngIf",n.template||l.templates[n.name])("ngIfThen",c)("ngIfElse",r)}}function K(t,e){1&t&&b.Pb(0,"tr",40)}function X(t,e){1&t&&b.Pb(0,"tr",41)}function Y(t,e){if(1&t&&b.Pb(0,"mat-paginator",42),2&t){var n=b.gc(2);b.mc("length",n.resultsLength)("pageSize",n.pageSize)("pageSizeOptions",n.pageSizeOptions)}}function q(t,e){if(1&t&&(b.Ub(0,"div",1,2),b.Gc(2,O,2,0,"div",3),b.hc(3,"async"),b.Ub(4,"table",4),b.Gc(5,L,3,0,"ng-container",5),b.Gc(6,N,11,9,"ng-container",6),b.Gc(7,K,1,0,"tr",7),b.Gc(8,X,1,0,"tr",8),b.Tb(),b.Gc(9,Y,1,3,"mat-paginator",9),b.Tb()),2&t){var n=b.gc();b.Dc("max-height","calc(100vh - 65px - 66px)"),b.Db(2),b.mc("ngIf",b.ic(3,10,n.loading$)),b.Db(2),b.mc("dataSource",n.realData),b.Db(1),b.mc("ngIf",n.tableConfig.selection),b.Db(1),b.mc("ngForOf",n.visibleColumns),b.Db(1),b.mc("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!!n.tableConfig.stickyHeader),b.Db(1),b.mc("matRowDefColumns",n.displayedColumns),b.Db(1),b.mc("ngIf",n.tableConfig.paginator)}}var B=["*"],Q=function(){function t(){this.selection=new i.c(!0,[]),this.templates={},this.realData=[],this.resultsLength=0,this.loadingSource$=new c.a(!0),this.loading$=this.loadingSource$.asObservable()}return Object.defineProperty(t.prototype,"pageSize",{get:function(){return this.tableConfig.pageSize||10},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pageSizeOptions",{get:function(){return this.tableConfig&&this.tableConfig.paginateOptions?this.tableConfig.paginateOptions:[5,10,20]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visibleColumns",{get:function(){return this.tableConfig?this.tableConfig.columns.filter(function(t){return!1!==t.visible}):[]},enumerable:!1,configurable:!0}),t.prototype.paginateData=function(t,e){return e?t.splice(e.pageSize*e.pageIndex,e.pageSize):t},Object.defineProperty(t.prototype,"displayedColumns",{get:function(){if(!this.tableConfig)return[];var t=this.visibleColumns.map(function(t){return t.name});return this.tableConfig.selection?S(["select"],t):t},enumerable:!1,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;if(this.tableConfig){var e=[Object(r.a)(null)];this.sort&&this.tableConfig.columns.some(function(t){return Boolean(t.sort)})&&(this.sort.sortChange.subscribe(function(){return t.paginator.pageIndex=0}),e.push(this.sort.sortChange)),this.paginator&&this.tableConfig.paginator&&e.push(this.paginator.page),l.a.apply(void 0,e).pipe(Object(s.a)({}),Object(u.a)(function(){return t.loadingSource$.next(!0),t.data?Array.isArray(t.data)?Object(r.a)({data:t.transformData(t.data),totalLength:t.data.length}).pipe(Object(f.a)(100)):t.data.pipe(Object(p.a)(function(e){return{data:t.transformData(e),totalLength:e.length}})):Object(r.a)({data:[],totalLength:0})}),Object(p.a)(function(e){return t.resultsLength=e.totalLength,t.loadingSource$.next(!1),e.data}),Object(g.a)(function(e){return t.loadingSource$.next(!1),console.error(e),Object(r.a)([])})).subscribe(function(e){return t.realData=e})}},t.prototype.getLabel=function(t,e){if("function"==typeof t.customLabel)throw new Error("'customLabel' is no implemented");return t.label$?t.label$:Object(r.a)(t.label||"")},t.prototype.isAllSelected=function(){return this.selection.selected.length===this.realData.length},t.prototype.checkboxLabel=function(t){return t?(this.selection.isSelected(t)?"deselect":"select")+" row":(this.isAllSelected()?"select":"deselect")+" all"},t.prototype.getContent=function(t,e){return"function"==typeof t.customContent?t.customContent(e):e[t.name]},t.prototype.sortData=function(t,e){return e&&e.active&&e.direction?t.sort("desc"===e.direction?function(t,n){return String(t[e.active]).localeCompare(String(n[e.active]))}:function(t,n){return String(n[e.active]).localeCompare(String(t[e.active]))}):t},t.prototype.masterToggle=function(){var t;this.isAllSelected()?this.selection.clear():(t=this.selection).select.apply(t,this.realData)},t.prototype.transformData=function(t){var e=this.sortData(S(t),this.sort);return this.tableConfig.paginator?this.paginateData(e,this.paginator):e},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Ib({type:t,selectors:[["app-abstract-table"]],viewQuery:function(t,e){if(1&t&&(b.Mc(a.a,3),b.Mc(o.a,3)),2&t){var n=void 0;b.uc(n=b.dc())&&(e.paginator=n.first),b.uc(n=b.dc())&&(e.sort=n.first)}},inputs:{tableConfig:"tableConfig",data:"data",templates:"templates"},ngContentSelectors:B,decls:1,vars:1,consts:[["class","mat-elevation-z8",3,"max-height",4,"ngIf"],[1,"mat-elevation-z8"],["tableWrapper",""],["class","example-loading-shade",4,"ngIf"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","select",4,"ngIf"],[3,"matColumnDef","sticky","stickyEnd",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions",4,"ngIf"],[1,"example-loading-shade"],["matColumnDef","select"],["mat-header-cell","","style","padding-left: 0",4,"matHeaderCellDef"],["mat-cell","","style","width: 6em; text-align: center",4,"matCellDef"],["mat-header-cell","",2,"padding-left","0"],["style","display: flex;justify-content: center;align-items: center;",4,"ngIf"],[2,"display","flex","justify-content","center","align-items","center"],[3,"checked","indeterminate","aria-label","change"],["aria-label","Example icon-button with a menu","mat-icon-button","",3,"disabled","matMenuTriggerFor",4,"ngIf"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["aria-label","Example icon-button with a menu","mat-icon-button","",3,"disabled","matMenuTriggerFor"],["mat-menu-item","",3,"click"],[4,"ngIf"],["mat-cell","",2,"width","6em","text-align","center"],[3,"checked","aria-label","click","change"],[3,"matColumnDef","sticky","stickyEnd"],[4,"ngIf","ngIfThen","ngIfElse"],["sortEnabled",""],["sortDisabled",""],["templateContent",""],["noTemplateContent",""],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-cell",""],["mat-cell","",3,"ngStyle","whiteSpace",4,"matCellDef"],["mat-cell","",3,"ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-cell","",3,"ngStyle",4,"matCellDef"],["mat-header-row",""],["mat-row",""],[3,"length","pageSize","pageSizeOptions"]],template:function(t,e){1&t&&(b.lc(),b.Gc(0,q,10,12,"div",0)),2&t&&b.mc("ngIf",e.tableConfig)},directives:[m.m,h.j,o.a,m.l,h.g,h.i,d.b,h.c,h.e,h.b,h.d,v.a,y.a,D.b,y.d,C.a,y.b,h.a,o.b,m.n,m.r,h.f,h.h,a.a],pipes:[m.b],styles:[".mat-elevation-z8[_ngcontent-%COMP%]{position:relative;overflow:auto;min-height:200px}.mat-elevation-z8[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z8[_ngcontent-%COMP%]   .example-loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.15);z-index:102;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}"],changeDetection:0}),t}()},kh7C:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var i,a=n("UXun"),o=n("JIr8"),c=n("M1lw"),r=n("o0vB"),l=n("IYfF"),s=n("9nlD"),u=n("fXoL"),f=n("tk/3"),p=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),g=function(t){function e(e,n,i){var o=t.call(this,e,n,i)||this;return o.countries$=o.fetchCountries().pipe(Object(a.a)(1)),o}return p(e,t),e.prototype.fetchCountries=function(){return this.http.get(c.a.BASE_URL+"/utils/countries",{headers:this.getHeaders()}).pipe(Object(o.a)(this.handleError("fetchCountries")))},e.\u0275fac=function(t){return new(t||e)(u.Yb(f.c),u.Yb(l.a),u.Yb(s.a))},e.\u0275prov=u.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(r.a)},o0vB:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("tk/3"),a=n("LRne"),o=n("JIr8"),c=(n("IYfF"),n("9nlD"),n("fXoL")),r=function(){function t(t,e,n,i){this.http=t,this._authService=e,this._notificationService=n,this.URL=i}return t.prototype.handleError=function(t,e){var n=this;return void 0===t&&(t="operation"),function(i){return n._notificationService.openErrorNotification(i),console.log(t+" failed: "+(i.message||i)),Object(a.a)(e)}},t.prototype.getDetail=function(t){return this.http.get(this.URL+"/"+t).pipe(Object(o.a)(this.handleError("getDetail")))},t.prototype.getList=function(t,e,n){return void 0===e&&(e=0),n?this.http.get(this.URL+"/quick-search/"+n+"?count="+t+"&offset="+e).pipe(Object(o.a)(this.handleError("search"))):this.http.get(this.URL+"/?count="+t+"&offset="+e).pipe(Object(o.a)(this.handleError("search")))},t.prototype.getHeaders=function(){var t=new i.h;return(t=(t=t.append("Content-type","application/json")).append("x-access-token",this._authService.getToken())).append("__auth_token__","3KJNUIHZobnkN3ZIa66ddsnsmvslDDD88d")},t.\u0275fac=function(t){c.bc()},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac}),t}()}}]);