page('/', inspectionController.index);

page('/about', aboutController.index);

page('/contact', contactController.index);

page('/project', projectController.index);

page('/reportcard/:establishment', reportcardController.index);

page('*', '/');

page();
