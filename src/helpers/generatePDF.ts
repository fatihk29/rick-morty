import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {Alert} from 'react-native';

const generatePDF = async (id: any) => {
  console.log('id :>> ', id);

  const orderLines = [
    {
      id: 1,
      product: 'Product 1',
      quantity: 1,
      price: '$10.00',
    },
    {
      id: 2,
      product: 'Product 2',
      quantity: 2,
      price: '$20.00',
    },
    {
      id: 3,
      product: 'Product 3',
      quantity: 3,
      price: '$30.00',
    },
  ];

  const count = 1;

  try {
    const html = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Helvetica';
              font-size: 12px;
            }
            header, footer {
              height: 50px;
              background-color: #fff;
              color: #000;
              display: flex;
              justify-content: center;
              padding: 0 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #000;
              padding: 5px;
            }
            th {
              background-color: #ccc;
            }
          </style>
        </head>
        <body>
          <header>
            <h1>Invoice for Order #${count}</h1>
          </header>
          <h1>Order Details</h1>
          <table>
            <tr>
              <th>Order ID</th>
              <td>${count}</td> 
            </tr>
            <tr>
              <th>Order Date</th>
              <td>29-Jul-2022</td>
            </tr>
            <tr>
              <th>Order Status</th>
              <td>Completed</td>
            </tr>
            <tr>
              <th>Order Total</th>
              <td>$13232</td>
            </tr>
          </table>
          <h1>Order Lines</h1>
          <table>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Qty</th>
              <th>Product Price</th>
            </tr>
            ${orderLines
              .map(
                line => `
              <tr>
                <td>${line.id}</td>
                <td>${line.product}</td>
                <td>${line.quantity}</td>
                <td>${line.price}</td>
              </tr>
            `,
              )
              .join('')}
          </table>
          <footer>
            <p>Thank you for your business!</p>
          </footer>
        </body>
      </html>
    `;
    const options = {
      html,
      fileName: `invoice_${count}`,
      directory: 'Invoices',
    };
    const file = await RNHTMLtoPDF.convert(options);
    console.log('file :>> ', file);
    Alert.alert('Success', `PDF saved to ${file.filePath}`);
  } catch (error: any) {
    Alert.alert('Error', error.message);
  }
};

export default generatePDF;
