<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Demo2.aspx.cs" Inherits="Demo2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ObservableArray KO</title>
    <script src="Scripts/jquery-2.2.0.min.js"></script>
    <script src="Scripts/jquery.tmpl.js"></script>
    <script src="Scripts/knockout-3.4.0.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>

        <div>
            <p>Product: <input type="text" data-bind="value: productName" /></p>
            <p>Price: <input type="text" data-bind="value: price" /></p>
            <button data-bind="click: addProduct, enable:products().length< 5">Add Product</button>
        </div>
    
        <label>Total # of Products in Inventory ( <span data-bind="text: products().length"> </span> )</label>
        <ul data-bind="template: { name: 'productsTemplate', foreach: products}"></ul>
        <script type="text/html" id="productsTemplate">
            <li><label>Product ${$data.pname} - ${$data.price} added at ${ new Date}</label>
                <button data-bind="click: remove">Remove</button>
            </li>
        </script>

    </div>
    </form>
    <script type="text/javascript">
        function Product(pname, price) {
            return {
                pname: ko.observable(pname),
                price: ko.observable(price),
                remove: function () {
                    vm.products.remove(this);
                }
            };
        }

        var vm = {
            productName: ko.observable("New Product"),
            price: ko.observable(0),
            products: ko.observableArray([new Product("Canon Rebel DSLR", 45000), new Product("Panasonic GH-2", 28000)]),
            addProduct: function(){
                vm.products.push( new Product(this.productName(), this.price()));
            }
        };

        ko.applyBindings(vm);
    </script>
</body>
</html>
