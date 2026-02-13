requirejs.config({
    baseUrl: '/',
    paths: {
        'jquery': 'WebDocViewer/jquery-3.5.1.min',
        'jquery-ui': 'WebDocViewer/jquery-ui-1.14.0.min',
        'raphael': 'WebDocViewer/raphael-min',
        'clipboard': 'WebDocViewer/clipboard.min',
        'web-document-viewer': 'WebDocViewer/atalaWebDocumentViewer',
    },
    //shim: {
    //    // Web Capture Service at the moment is non-AMD script and requires a AMD shim config.
    //    'web-capture-service': {
    //        deps: ['jquery'],
    //        exports: 'Atalasoft',
    //    }
    //}
});

requirejs(["web-document-viewer", "jquery"], function RunApp(Atalasoft, jQuery) {
    var _docUrl = '/images/DocCleanMultipage.tif';
    var _serverUrl = '/WebDocViewerHandler.ashx';
    var _savePath = '/Saved/';
    // Initialize Web Document Viewer
    var viewer = new Atalasoft.Controls.WebDocumentViewer({
        parent: $('#_containerViewer'), // parent container to put the viewer in
        toolbarparent: $('#_toolbar1'), // parent container to put the viewer toolbar in
        serverurl: _serverUrl, // server handler url to send image requests to
        allowannotations: true, // flag to enable annotations
        savepath: _savePath, // relative url to save annotation data to
        showscrollbars: true,
        forcepagefit: true
    });
    var thumbs = new Atalasoft.Controls.WebDocumentThumbnailer({
        parent: $('#_containerThumbs'), // parent container to putthe thumbnails in
        serverurl: _serverUrl, // server handler url tosend image requests to
        documenturl: _docUrl, // document url relative to the server handler url
        //annotationsurl: _annUrl, // annotation file to load upon page loading
        allowannotations: true, // flag to enable annotations 
        viewer: viewer, // link actions to the _viewer so they open the same doc
        allowdragdrop: true,
        showscrollbars: true
    });


    // brings the _viewer object back onto the window global namespace so we can access it with existing code
    window._viewer = viewer;
    window._thumbs = thumbs;
    //window._capture = cap;

    // DO all your event binding here
    //window._viewer.bind('documentsaved', function (e) { alert('Document Save: ' + e.success); });
    viewer.bind('documentsaved', function (e) { alert('Document Save: ' + e.success); });


});

