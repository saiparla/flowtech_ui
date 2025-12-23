app_name = "flowtech_ui"
app_title = "flowtech ui"
app_publisher = "saikumar parla"
app_description = "flowtech ui customizations made by saikumar parla"
app_email = "saiparla@hippoclouds.com"
app_license = "mit"

# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "flowtech_ui",
# 		"logo": "/assets/flowtech_ui/logo.png",
# 		"title": "flowtech ui",
# 		"route": "/flowtech_ui",
# 		"has_permission": "flowtech_ui.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/flowtech_ui/css/flowtech_ui.css"
app_include_js = ["/assets/flowtech_ui/js/login.js","/assets/flowtech_ui/js/navbar.js","/assets/flowtech_ui/js/deskpage.js","/assets/flowtech_ui/js/list.js","/assets/flowtech_ui/js/sidebar.js","/assets/flowtech_ui/js/flowtechlogo.js","/assets/flowtech_ui/js/form.js","/assets/flowtech_ui/js/dialog.js"]

# include js, css files in header of web template
app_include_css = "/assets/flowtech_ui/css/sidebaricons.css"

web_include_js =["/assets/flowtech_ui/js/login.js","/assets/flowtech_ui/js/navbar.js","/assets/flowtech_ui/js/deskpage.js","/assets/flowtech_ui/js/list.js","/assets/flowtech_ui/js/sidebar.js","/assets/flowtech_ui/js/flowtechlogo.js","/assets/flowtech_ui/js/form.js","/assets/flowtech_ui/js/dialog.js"]

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "flowtech_ui/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "flowtech_ui/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "flowtech_ui.utils.jinja_methods",
# 	"filters": "flowtech_ui.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "flowtech_ui.install.before_install"
# after_install = "flowtech_ui.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "flowtech_ui.uninstall.before_uninstall"
# after_uninstall = "flowtech_ui.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "flowtech_ui.utils.before_app_install"
# after_app_install = "flowtech_ui.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "flowtech_ui.utils.before_app_uninstall"
# after_app_uninstall = "flowtech_ui.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "flowtech_ui.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"flowtech_ui.tasks.all"
# 	],
# 	"daily": [
# 		"flowtech_ui.tasks.daily"
# 	],
# 	"hourly": [
# 		"flowtech_ui.tasks.hourly"
# 	],
# 	"weekly": [
# 		"flowtech_ui.tasks.weekly"
# 	],
# 	"monthly": [
# 		"flowtech_ui.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "flowtech_ui.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "flowtech_ui.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "flowtech_ui.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["flowtech_ui.utils.before_request"]
# after_request = ["flowtech_ui.utils.after_request"]

# Job Events
# ----------
# before_job = ["flowtech_ui.utils.before_job"]
# after_job = ["flowtech_ui.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"flowtech_ui.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

