import React, { useCallback, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

interface MapLocation {
  lat: number;
  lng: number;
  title?: string;
  address?: string;
  phone?: string;
  email?: string;
}

interface GoogleMapCardProps {
  apiKey: string | undefined;
  location: MapLocation;
  width?: string | number;
  height?: string | number;
  zoom?: number;
  className?: string;
  showInfoWindow?: boolean;
  mapStyles?: google.maps.MapTypeStyle[];
}

const defaultMapStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {
        weight: "2.00",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#9c9c9c",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#7b7b7b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#c8d7d4",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#070707",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
];

const GoogleMapCard: React.FC<GoogleMapCardProps> = ({
  apiKey,
  location,
  width = "100%",
  height = 400,
  zoom = 15,
  className = "",
  showInfoWindow = true,
  mapStyles = defaultMapStyles,
}) => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const containerStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  const onLoad = useCallback((_map: google.maps.Map) => {
    // Map is loaded and ready to use
    console.log(_map, "Map loaded");
  }, []);

  const onUnmount = useCallback(() => {
    // Map is being unmounted
  }, []);

  const handleMarkerClick = () => {
    if (showInfoWindow) {
      setIsInfoWindowOpen(true);
    }
  };

  const handleInfoWindowClose = () => {
    setIsInfoWindowOpen(false);
  };

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <LoadScript googleMapsApiKey={apiKey || ""}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            styles: mapStyles,
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
        >
          <Marker
            position={center}
            onClick={handleMarkerClick}
            title={location.title}
          />

          {showInfoWindow && isInfoWindowOpen && (
            <InfoWindow position={center} onCloseClick={handleInfoWindowClose}>
              <div className="p-2 max-w-xs">
                {location.title && (
                  <h3 className="font-semibold text-lg mb-2">
                    {location.title}
                  </h3>
                )}
                {location.address && (
                  <p className="text-gray-600 mb-2">{location.address}</p>
                )}
                <div className="space-y-1">
                  {location.phone && (
                    <p className="text-sm">
                      <span className="font-medium">Phone: </span>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {location.phone}
                      </a>
                    </p>
                  )}
                  {location.email && (
                    <p className="text-sm">
                      <span className="font-medium">Email: </span>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {location.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapCard;
