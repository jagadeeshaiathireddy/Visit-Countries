import styled from 'styled-components'

export const AppComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-color: #161624;
  padding: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
  margin-left: 78px;
  margin-top: 20px;
  margin-bottom: 0px;
`
export const CountriesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50vh;
  border-radius: 12px;
  background-color: #1f1f2f;
  overflow-y: auto;
  list-style-type: none;
  margin-left: 80px;
`
export const ListItem = styled.li`
  height: 40px;
  display: flex;
  justify-content: space-between;

  margin: 10px;
  padding: 2px;
`
export const ListPara = styled.p`
  font-family: 'Roboto';
  color: #f1f5f9;
`
export const ListButton = styled.button`
  justify-content: space-around;
  background-color: ${props => (props.isVisit ? 'transparent' : '#3b82f6')};
  color: ${props => (props.isVisit ? '#94a3b8' : '#ffffff')};
  width: 80px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
`
export const VisitedCountries = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`
export const VisitedListDisplay = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`
export const ListItem1 = styled.li`
  display: flex;
  flex-direction: column;
`
export const EmptyHeader = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f1f2f;
  border-radius: 2px;
  margin: 10px;
`
export const ThumbItem = styled.img`
  height: 150px;
  width: 240px;
`

export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
`
export const NameOfItem = styled.p`
  font-family: 'Roboto';
  color: #cbd5e1;
  margin-left: 6px;
`
export const DeleteButton = styled.button`
  border-radius: 3px;
  width: 80px;
  height: 30px;
  background-color: transparent;
  font-family: 'Roboto';
  color: #cbd5e1;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
`
