<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="BasicWdv_RequireJS.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <link href="WebDocViewer/jquery-ui-1.14.0.min.css" rel="Stylesheet" type="text/css" />
    <link href="WebDocViewer/atalaWebDocumentViewer.css" rel="Stylesheet" type="text/css" />

    <!-- data-main attribute tells require.js to load app.js after require.js loads. -->
    <script data-main="/scripts/atalaInitialization" src="/scripts/require.js" defer="defer"></script>

</head>
<body>
    <form id="form1" runat="server">
     <div style="width: 900px;">
    <div id="_toolbar1"></div>
    <div id="_containerThumbs" style="width: 180px; height: 600px;
    display: inline-block;"></div>
    <div id="_containerViewer" style="width: 710px; height: 600px;
    display: inline-block;"></div>
    </div>
    </form>
</body>
</html>
