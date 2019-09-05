import React from 'react'    
import PropTypes from 'prop-types'    
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, Epic, Tabbar, TabsItem, FixedLayout} from '@vkontakte/vkui'    
import Shelf from '../components/Shelf'


const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Test app</PanelHeader>
		{fetchedUser &&
			<Group title="User Data Fetched with VK Connect">
				<ListItem
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</ListItem>
			</Group>}

		<Group title="Dixy mob-vk-app">
		<FixedLayout>
				<TabsItem> 
					<Shelf/>
					<Shelf/>
					<Shelf/>
				</TabsItem>
		</FixedLayout>
		</Group>
		
		<Epic>
			<Tabbar></Tabbar>
		</Epic>
	</Panel>
)    

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
}    

export default Home    
