import { IconButton, InputAdornment, TextField } from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear";
import { Filters } from "../types/Filters";
import { useAppDispatch } from "../app/hooks";
import { setQuery } from "../features/filter";

type Props = {
  query: string,
  filtersKey: keyof Filters,
}

export const UserFilter: React.FC<Props> = ({ query, filtersKey }) => {
  const dispatch = useAppDispatch();

  const handleChangeFilter = (value: string) => {
    dispatch(setQuery({ key: filtersKey, value }))
  }

  return (
    <>
      <TextField 
        type="text" 
        value={query} 
        id="outlined-basic" 
        label={filtersKey} 
        variant="outlined" 
        size="small" 
        style={{marginTop: '10px'}}
        onChange={(e) => handleChangeFilter(e.target.value)}
      >
        <InputAdornment position="end">
          <IconButton onClick={() => handleChangeFilter('')}>
            <ClearIcon />
          </IconButton>
        </InputAdornment>
      </TextField>
    </>
  )
}