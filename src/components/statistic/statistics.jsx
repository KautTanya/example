import PropTypes from 'prop-types';
import { Statistics, Title, StatList, Item, Label, Percentage } from './Statistics.styled';
 
export const StatisticsCard = ({title, stats}) => {
    return(
        <Statistics>
          {title && <Title>{title}</Title>}
          <StatList>
            {
              stats.map(stat =>(
                <Item key={stat.id}>
                  <Label>{stat.label}</Label>
                  <Percentage>{stat.percentage}%</Percentage>
                </Item>
              ))
            }
          
          </StatList>
        </Statistics>
    );
};
StatisticsCard.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};