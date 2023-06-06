import './AddProduct.css'
import { TextField,FormControl,InputLabel,Select,MenuItem } from '@mui/material'
import { useStates } from '../States';
import { RiDeleteBinLine } from 'react-icons/ri'

const AddProduct = ({ show }) => {

  const { setProdname, setProdrate, setProdurl, SendtoprodDB, setProdshop } = useStates();
  return (
    <>
      <div className='add-page'>
        <div className='add-box'>

          <div className='add-div'>
            <span className='add-text'><b>Add New Product</b></span>
          </div>

          <form onSubmit={() => show(false)}>
            <div className='canceladdprod-div'>
              <button className='canceladdprod-btn'><b><RiDeleteBinLine /></b></button>
            </div>
          </form>

          <form onSubmit={SendtoprodDB}>

            <div className='prodname-div'>
              <TextField className='prodname-in' label="Product Name" variant="standard" required
                onChange={(e) => setProdname(e.target.value)} />
            </div>

            <div className='prodrate-div'>
              <TextField className='prodrate-in' type='number' label="Product Price" variant="standard" required
                onChange={(e) => setProdrate(e.target.value)} />
            </div>

            <div className='produrl-div'>
              <TextField className='produrl-in' label="Product URL" variant="standard" required
                onChange={(e) => setProdurl(e.target.value)} />
            </div>

            <div className='prodshop-div'>

            <FormControl variant='standard' fullWidth required>
              <InputLabel>Shop Name</InputLabel>
              <Select
                className='prodshop-in'
                label="Age"
                onChange={(e) => setProdshop(e.target.value)}
              >
                <MenuItem value={"SR Pharmacy"}>SR Pharmacy</MenuItem>
                <MenuItem value={"Apollo Pharmacy"}>Apollo Pharmacy</MenuItem>
                <MenuItem value={"Drugs.com"}>Drugs.com</MenuItem>
                <MenuItem value={"GoodRX Pharmacy"}>GoodRX Pharmacy</MenuItem>
                <MenuItem value={"Chongqing Tongjunge Drugstores Co. Ltd,"}>Chongqing Tongjunge Drugstores Co. Ltd,</MenuItem>
              </Select>
            </FormControl>


            </div>

            <div className='addprod-div'>
              <button className='addprod-btn' onClick={() => show(false)}>Add Product</button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
