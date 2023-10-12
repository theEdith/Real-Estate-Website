import React from "react";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";
import { Button, Group, Select, TextInput } from "@mantine/core";
import useCountries from "../../hooks/useCountries.jsx";
import Map from '../../components/Map/Map.jsx'
import "./AddLocation.css"

const AddLocation = ({ propertyDetails, setPropertyDetails,nextStep}) => {
    const { getAll } = useCountries();

    const form = useForm({
        initialValues: {
            country: propertyDetails?.country,
            city: propertyDetails?.city,
            address: propertyDetails?.address,
        },
        validate: {
            country: (value) => validateString(value),
            city: (value) => validateString(value),
            address: (value) => validateString(value),
        },
    });

    const { country, city, address } = form.values;

    const handleSubmit=()=>{
        const {hasErrors}=form.validate()
        if (!hasErrors) {
            setPropertyDetails((prev)=>({...prev,city,address,country}))
            nextStep()
        }
    }

    return (
        <form 
        onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit()
        }}
        >
            {/* left */}
            <div
                className="flexCenter"
                style={{
                    gap: "3rem",
                    marginTop: "3rem",
                    justifyContent: "space-between",
                    flexDirection: "wrap",
                }}
            >
                <div className="flexColStart" style={{ flex: 1 }}>
                    <Select
                        w={"100%"}
                        withAsterisk
                        label="Country"
                        searchable
                        my="md"
                        data={getAll()}
                        {...form.getInputProps("country", { type: "input" })}
                    />

                    <TextInput
                        w={"100%"}
                        withAsterisk
                        my="md"
                        label="City"
                        {...form.getInputProps("city", { type: "input" })}
                    />

                    <TextInput
                        w={"100%"}
                        withAsterisk
                        label="Address"
                        my="md"
                        {...form.getInputProps("address", { type: "input" })}
                    />
                </div>
                {/* right */}
                <div style={{ flex: 1 }}>
                    <Map address={address} city={city} country={country} />
                </div>
            </div>

            <Group position="center" mt={"xl"} style={{paddingBottom:"2rem"}}>
                <Button type="submit">Next Step</Button>
            </Group>
        </form>
    );
};

export default AddLocation;