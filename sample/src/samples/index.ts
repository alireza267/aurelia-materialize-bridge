import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig } from "aurelia-router";

@autoinject
export class Index {
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		const css = "Css";
		const components = "Components";
		const js = "Javascript";
		const forms = "Forms";
		const contrib = "Contributions";

		const routes: RouteConfig[] = [
			{ route: "catalog", name: "catalog", moduleId: "./catalog/catalog", title: "Catalog" },
			this.getRouteConfig("color", css),
			this.getRouteConfig("badge", components),
			this.getRouteConfig("button", components),
			this.getRouteConfig("breadcrumbs", components),
			this.getRouteConfig("card", components),
			this.getRouteConfig("chip", components),
			this.getRouteConfig("collections", components),
			this.getRouteConfig("footer", components),
			this.getRouteConfig("navbar", components),
			this.getRouteConfig("pagination", components),
			this.getRouteConfig("progress", components),
			this.getRouteConfig("collapsible", js),
			this.getRouteConfig("dialogs", js),
			this.getRouteConfig("dropdown", js),
			this.getRouteConfig("media", js),
		];
		config.map(routes);
		this.router = router;
	}

	getRouteConfig(name: string, category: string, wip?: boolean): RouteConfig {
		let title = name.replace(/-/g, " ");
		return { route: name, name, moduleId: `./${name}/index`, nav: true, title: title.charAt(0).toUpperCase() + title.slice(1).toLowerCase(), category, status: wip ? "wip" : "done" };
	}

	attached(){
		console.log(this.router);
	}
}