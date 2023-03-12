import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {Alert} from 'react-native';

import {html1} from './html-template/1';

const generatePDF = async (id: any) => {
  console.log('id :>> ', id);

  try {
    const html = html1;
    const options = {
      html,
      fileName: `invoice111`,
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
