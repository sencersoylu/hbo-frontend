"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSessionModalStore } from "@/hooks/useSessionModal";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SessionChart from "./sessionChart";
import { use, useEffect, useState } from "react";
import profileToArr from "@/lib/profile";
import { useToast } from "./ui/use-toast";
import useSessionStore from "@/store/session";
import { profile } from "console";


export function SessionModal() {
  const sessionModalStore = useSessionModalStore();
  const sessionStore = useSessionStore();

  const [profileData, setProfileData] = useState([]);

  const [profileID, setProfileID] = useState("0");

  const { toast } = useToast();

  function startSession() {
    //check door if the door is open  give alert
    if (sessionStore.sessionStatus.doorClosed) {
      toast({
        variant: "destructive",
        title: "Check Door !",
        description: "Please check the door before starting the session.",
      });
    } else {
      const profile = profiles.find(
        (profile) => profile.profileid === profileID,
      );

      sessionStore.startSession({
        ...profileData,
        profileName: profile.profileName,
        profileid: profileID,
      });
      closeModal();
    }
  }

  useEffect(() => {
    console.log(profileID);
    const profile = profiles.find((profile) => profile.profileid === profileID);
    console.log(profile);
    if (profile) {
      setProfileData(profileToArr(profile.profileData));
    }
  }, [profileID]);

  function closeModal() {
    sessionModalStore.setOpen(false);
    setProfileData([]);
    setProfileID("0");
  }

  const profiles = [
    {
      profileName: "test",
      profileid: "5",
      profileData: [
        {
          duration: 1,
          pressure: 45,
          gas: "air",
        },
        {
          duration: 1,
          pressure: 45,
          gas: "o2",
        },
        {
          duration: 1,
          pressure: 45,
          gas: "air",
        },
        {
          duration: 1,
          pressure: 45,
          gas: "o2",
        },
        {
          duration: 1,
          pressure: 45,
          gas: "air",
        },

        {
          duration: 1,
          pressure: 45,
          gas: "o2",
        },
        {
          duration: 1,
          pressure: 0,
          gas: "air",
        },
      ],
    },

    {
      profileName: "ada",
      profileid: "1",
      profileData: [
        {
          duration: 15,
          pressure: 45,
          gas: "air",
        },
        {
          duration: 25,
          pressure: 45,
          gas: "o2",
        },
        {
          duration: 5,
          pressure: 45,
          gas: "air",
        },
        {
          duration: 25,
          pressure: 45,
          gas: "o2",
        },
        {
          duration: 5,
          pressure: 45,
          gas: "air",
        },

        {
          duration: 25,
          pressure: 45,
          gas: "o2",
        },
        {
          duration: 15,
          pressure: 0,
          gas: "air",
        },
      ],
    },
    {
      profileName: "nil",
      profileid: "2",
      profileData: [
        {
          duration: 5,
          pressure: 10,
          gas: "air",
        },
        {
          duration: 5,
          pressure: 10,
          gas: "o2",
        },
        {
          duration: 5,
          pressure: 15,
          gas: "air",
        },
        {
          duration: 5,
          pressure: 15,
          gas: "o2",
        },
        {
          duration: 15,
          pressure: 0,
          gas: "air",
        },
      ],
    },
    {
      profileName: "sencer",
      profileid: "3",
      profileData: [
        {
          duration: 15,
          pressure: 45,
          gas: "air",
        },
        {
          duration: 25,
          pressure: 45,
          gas: "o2",
        },
        {
          duration: 5,
          pressure: 45,
          gas: "air",
        },
        {
          duration: 25,
          pressure: 45,
          gas: "o2",
        },
        {
          duration: 5,
          pressure: 45,
          gas: "air",
        },

        {
          duration: 25,
          pressure: 45,
          gas: "o2",
        },
        {
          duration: 15,
          pressure: 0,
          gas: "air",
        },
      ],
    },
  ];

  return (
    <Dialog
      open={sessionModalStore.isOpen}
      onOpenChange={(st) => {
        closeModal();
      }}
    >
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Start Session</DialogTitle>
          <DialogDescription>
            Please set the session data before the session.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid grid-cols-2 gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Patient
            </Label>
            <Input
              id="name"
              placeholder="Patient Name"
              className="col-span-3"
              inputMode="text"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Doctor
            </Label>
            <Input
              id="username"
              placeholder="Doctor Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Operator
            </Label>
            <Input
              id="username"
              placeholder="Operator Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Profile
            </Label>
            <Select onValueChange={setProfileID}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Profiles" />
              </SelectTrigger>
              <SelectContent>
                {profiles.map((profile) => (
                  <SelectItem value={profile.profileid} key={profile.profileid}>
                    {profile.profileName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid items-center">
          <SessionChart profileData={profileData} />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="h-16 w-48  bg-indigo-800 font-raleway text-2xl font-bold"
            onClick={() => {
              startSession();
            }}
            disabled={profileData.length === 0}
          >
            Start Session
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
