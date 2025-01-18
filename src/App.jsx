import "./App.css";
import RootLayout from "./layout/RootLayout";
import Notes from "./Pages/Notes/Notes";
import Dashboard from "./Pages/Dashboard";
import DeviceControl from "./Pages/DeviceControl";
import KeyLogger from "./Pages/KeyLogger";
import { SavedPassword } from "./Pages/SavedPassword";
import SocialApps from "./Pages/SocialApps";
import AllAllert from "./Pages/AllAllert";
import NotificationSetting from "./Pages/NotificationSetting";
import InstantAlert from "./Pages/InstantAlert";
import AppPermission from "./Pages/AppPermission";
import PermisionManager from "./Pages/PermisionManager";
import Export from "./Pages/Export";
import Payment from "./Pages/Payment";
import Callhistory from "./Pages/Calls/Callhistory";
import BlockedCalls from "./Pages/Calls/BlockedCalls";
import FaceTime from "./Pages/Calls/FaceTime";
import ForwardCalls from "./Pages/Calls/ForwardCalls";
import ContactList from "./Pages/Contacts/ContactList";
import BlockedContact from "./Pages/Contacts/BlockedContact";
import InstalledApp from "./Pages/Apps/InstalledApp";
import UnInstalledApp from "./Pages/Apps/UnstalledApp";
import BlockedApp from "./Pages/Apps/BlockedApp";
import Location from "./Pages/Location/Location";
import GeoFence from "./Pages/Location/geoFence";
import LocationHistory from "./Pages/Location/LocationHistory";
import AllApps from "./Pages/Apps/AllApps";
import BrowseHistory from "./Pages/Browser/BrowserHistory";
import BrowseDataUsage from "./Pages/Browser/BrowseDataUsage";
import WebFilter from "./Pages/Browser/WebFilter";
import ScreenTime from "./Pages/Browser/ScreenTime";
import MessagesMain from "./components/messages/MessagesMain";
import MobileMain from "./components/network/mobile/MobileMain";
import WifiMain from "./components/network/wifi/WifiMain";
import DataMain from "./components/network/data-usage/DataMain";
import MediaMain from "./components/media/photos/photosMain";
import CameraMain from "./components/camera/CameraMain";
import VideosMain from "./components/media/videos/VideosMain";
import AlbumMain from "./components/media/albums/AlbumMain";
import CalenderMain from "./components/calender/CalenderMain";
import ScreenShotsMain from "./components/media/screenshots/ScreenShotsMain";
import AllFiles from "./Pages/Files/AllFiles";
import FilesDownload from "./Pages/Files/FilesDownload";
import Appsnotification from "./Pages/Apps/Appsnotification";
import Appsscreentime from "./Pages/Apps/AppScreentimem";
import CallProfile from "./Pages/Calls/CallProfile";
import ContactProfile, {
  BlockedContactProfile,
} from "./Pages/Contacts/ContactProfile";
import NotesProfile from "./Pages/Notes/NotesProfile";
import LoginAndPassword from "./Pages/Apps/LoginAndPassword";
import WifiLogger from "./Pages/Location/WifiLogger";
import AppInformation from "./Pages/Apps/AppInformation";
import LoginpassProfile from "./Pages/Apps/LoginpassProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="devicecontrol" element={<DeviceControl />} />
          <Route path="calls/callhistory" element={<Callhistory />} />
          <Route path="call/callprofile" element={<CallProfile />} />
          <Route path="calls/blockedcalls" element={<BlockedCalls />} />
          <Route path="calls/facetime" element={<FaceTime />} />
          <Route path="calls/forwardedcalls" element={<ForwardCalls />} />
          <Route path="contacts/contactslist" element={<ContactList />} />
          <Route path="contacts/contactprofile" element={<ContactProfile />} />
          <Route
            path="contacts/blockedcontactprofile"
            element={<BlockedContactProfile />}
          />
          <Route path="messages" element={<MessagesMain />} />
          <Route path="network/mobile-network" element={<MobileMain />} />
          <Route path="network/wifi-network" element={<WifiMain />} />
          <Route path="network/data-usage" element={<DataMain />} />
          <Route path="Camera/camera" element={<CameraMain />} />
          <Route path="media/photos" element={<MediaMain />} />
          <Route path="media/videos" element={<VideosMain />} />
          <Route path="media/screenshots" element={<ScreenShotsMain />} />
          <Route path="media/albums" element={<AlbumMain />} />
          <Route path="calendar" element={<CalenderMain />} />
          <Route path="contacts/blockedcontacts" element={<BlockedContact />} />
          <Route
            path="Privacy&Security/SavedPassword"
            element={<SavedPassword />}
          />
          <Route path="KeyLogger" element={<KeyLogger />} />
          <Route path="SocialApps" element={<SocialApps />} />
          <Route path="AllAllerts" element={<AllAllert />} />
          <Route path="Alert&Notification/AllAllerts" element={<AllAllert />} />
          <Route
            path="Alert&Notification/NotificationSettings"
            element={<NotificationSetting />}
          />
          <Route
            path="Alert&Notification/InstantAlerts"
            element={<InstantAlert />}
          />
          <Route path="InstantAlerts" element={<InstantAlert />} />
          <Route path="AppPermisions" element={<AppPermission />} />
          <Route
            path="Privacy&Security/AppPermisions"
            element={<PermisionManager />}
          />
          <Route path="PermisionManager" element={<PermisionManager />} />
          <Route path="Export" element={<Export />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="apps/installedapp" element={<InstalledApp />} />
          <Route path="Privacy&Security/Payment" element={<Payment />} />
          <Route path="apps/uninstalledapp" element={<UnInstalledApp />} />
          <Route path="apps/blockedapp" element={<BlockedApp />} />
          <Route path="apps/loginandpassword" element={<LoginAndPassword />} />
          <Route
            path="Apps/loginandpassword/profile"
            element={<LoginpassProfile />}
          />

          <Route path="location" element={<Location />} />
          <Route path="location/livelocation" element={<Location />} />
          <Route
            path="location/locationhistory"
            element={<LocationHistory />}
          />
          <Route path="location/geofrence" element={<GeoFence />} />
          <Route path="location/wifilogger" element={<WifiLogger />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notesprofile" element={<NotesProfile />} />
          <Route path="apps/allapps" element={<AllApps />} />
          <Route path="browser/browserhistory" element={<BrowseHistory />} />
          <Route path="browser/datausage" element={<BrowseDataUsage />} />
          <Route path="browser/webfilters" element={<WebFilter />} />
          <Route path="browser/screentime" element={<ScreenTime />} />
          <Route path="files/allfiles" element={<AllFiles />} />
          <Route path="files/downloads" element={<FilesDownload />} />
          <Route path="apps/notification" element={<Appsnotification />} />
          <Route path="apps/screentime" element={<Appsscreentime />} />
          <Route path="apps/appinformation" element={<AppInformation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
