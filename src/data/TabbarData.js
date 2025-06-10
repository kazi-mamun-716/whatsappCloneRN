import CallListScreen from '../screens/CallListScreen';
import ChatListScreen from '../screens/ChatListScreen';
import StatusListScreen from '../screens/StatusListScreen';

export const TabBarData = [
  {
    id: 1,
    route: ChatListScreen,
    name: 'CHATS',
  },
  {
    id: 2,
    route: StatusListScreen,
    name: 'STATUS',
  },
  {
    id: 3,
    route: CallListScreen,
    name: 'CALLS',
  },
];
