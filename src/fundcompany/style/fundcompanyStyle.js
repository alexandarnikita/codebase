import { createMuiTheme} from '@material-ui/core/styles';
export const fundcompanyStyle = {
  getMuiTheme,
  getMuiTable
};
function getMuiTheme() {
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MuiOutlinedInput: {
        input:{
          padding: '0px'
        },
      },
      MuiInput:{
        underline:{
          '&:after':{
            border: '0px !important'
          },
          '&:before':{
            border: '0px !important'
          },
        }
      },
      MuiMenuItem: {
        root:{
          boxSizing: 'border-box'
        },

      },
    }
  });
};
function getMuiTable() {
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MuiFormControl: {
        marginNormal: {
        marginTop: '0px',
        marginBottom: '0px',
      }
      },
      MuiIconButton: {
        root: {
          padding: '2px',
        }
      },
      MuiTable: {
        root: {
          fontFamily: 'sans-serif',
        }
      },
      MuiTableCell: {
        root:{
          padding: '0px !important',
        },
        head: {
          fontSize: '0.8rem',
          fontWeight: '600',
          padding: '0px !important'
        }
      },
      MuiTableRow:{
        root: {
          height: 'auto !important',
        },
        hover: {
          '&:hover': {
            backgroundColor: '#E5F1F6 !important',
          }
        }
      },
      MUIDataTableSelectCell:{
        headerCell: {
          border: "1px solid #ccc",
          align : 'center',
          height: '16px !important',
          padding: '0px !important',
          backgroundColor: "#f4f3f3",
        }
      },
      MUIDataTableHeadCell: {
        root: {
          background: '#E4EAED', /* Old browsers */
          background: '-moz-linear-gradient(top, #E4EAED 0%, #F7F9FA 100%)', /* FF3.6-15 */
          background: '-webkit-linear-gradient(top, #E4EAED 0%,#F7F9FA 100%)', /* Chrome10-25,Safari5.1-6 */
          background: 'linear-gradient(to bottom, #E4EAED 0%,#F7F9FA 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#E4EAED", endColorstr="#F7F9FA",GradientType=0 )', /* IE6-9 */
          color: '#00395D',
          fontSize: '12px',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          height: '48px !important',
          borderRight: '1px solid #d5d5d6',
          borderTop: '1px solid #d5d5d6',
          padding: '0px 15px !important',
          '&:first-child':{
            borderLeft: '1px solid #d5d5d6'
          },
        },
        sortActive: {
          color: '#00395D',
        },
        fixedHeader :{
          backgroundColor: "#f4f3f3",
        }
      },
      MuiTableSortLabel:{
        active:{
          color: '#00395D',
        }
      },
      MUIDataTableSelectCell: {
        headerCell: {
          display: 'flex',
          justifyContent: 'center',
          background: '#E4EAED', /* Old browsers */
          background: '-moz-linear-gradient(top, #E4EAED 0%, #F7F9FA 100%)', /* FF3.6-15 */
          background: '-webkit-linear-gradient(top, #E4EAED 0%,#F7F9FA 100%)', /* Chrome10-25,Safari5.1-6 */
          background: 'linear-gradient(to bottom, #E4EAED 0%,#F7F9FA 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#E4EAED", endColorstr="#F7F9FA",GradientType=0 )', /* IE6-9 */
          color: '#00395D',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          height: '48px !important',
          borderRight: '1px solid #d5d5d6',
          borderTop: '1px solid #d5d5d6',
          '&:first-child':{
            borderLeft: '1px solid #d5d5d6',
            borderBottom: '1px solid #d5d5d6'
          },
        },
        root: {
          display: 'flex',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          padding:'6px',
          textAlign: 'center',
          borderBottom:'0px',
          '&:first-child':{
            borderLeft: '1px solid #d5d5d6'
          },
        }
      },

      MUIDataTableBodyCell: {
        root: {
          whiteSpace: 'nowrap',
          padding:'6px',
          borderBottom:'0px',
          textAlign: 'center',
          borderRight: '1px solid #d5d5d6',
          '&:first-child':{
            borderLeft: '1px solid #d5d5d6'
          },
        }
      },
      MuiTableCell:{
        body:{
          fontSize: '12px'
        }
      },
      MUIDataTableBodyRow: {
        root: {
          '&:nth-child(even)': {
            backgroundColor: '#F6F7F7'
          },
          '&:last-child':{
            borderBottom: '1px solid #d5d5d6'
          },
        }
      },
      MUIDataTableToolbar: {
        root: {
           display: 'none'
       }
      }
    }
  });
}
