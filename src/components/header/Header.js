import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view'

const Header = () => {

    const [value, setValue] = useState("one");

    const { flex, header } = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ ...flex, ...header }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="secondary"
            >
                <ScrollIntoView value="one" selector=".info__heading">
                    <Tab value="one" label="Главная" icon={<HomeIcon />} iconPosition="bottom" />
                </ScrollIntoView>
                <ScrollIntoView value="two" selector=".rules__heading">
                    <Tab value="two" label="Правила" icon={<DescriptionIcon />} iconPosition="bottom" />
                </ScrollIntoView>
                <ScrollIntoView value="three" selector=".signs__heading">
                    <Tab value="three" label="Знаки" icon={<FollowTheSignsIcon />} iconPosition="bottom" />
                </ScrollIntoView>
                <ScrollIntoView value="four" selector=".video">
                    <Tab value="four" label="Инфо" icon={<ContactsIcon />} iconPosition="bottom" />
                </ScrollIntoView>
            </Tabs>
        </Box >
    );
}

export default Header;