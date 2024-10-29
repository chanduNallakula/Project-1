// import {
//   Typography,
//   Select,
//   MenuItem,
//   InputLabel,
//   TextField,
//   Button,
//   SelectChangeEvent,
//   FormControl,
//   Dialog,
//   Grid,
// } from "@mui/material";
// import React, { useState } from "react";
// import { DashboardTitle } from "../DashboardContainer";
// import { useQuery } from "@tanstack/react-query";
// import { getAllCreatives } from "@/apis/creatives";
// import axiosClient from "@/apis/axiosClient";

// import { getAllCreativesets } from "@/apis/creativesets";
// import toast from "react-hot-toast";

// interface CreativeUpdateMainProps {
//   openDialog: boolean;
//   handleDialogClose?: () => void;
//   cbId: number;
// }

// const CreativeUpdatedMain: React.FC<CreativeUpdateMainProps> = ({
//   openDialog,
//   handleDialogClose,
//   cbId,
// }) => {
//   const {
//     data: creatives,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["creatives"],
//     queryFn: getAllCreatives,
//   });
//   const {
//     data: creativesets,
//     // isLoading: creativesetsLoading,
//     // isError: creativesetsError,
//   } = useQuery({
//     queryKey: ["creativesets"],
//     queryFn: getAllCreativesets,
//   });

//   const creativesToEdit = creatives?.list?.filter(
//     (creative) => creative.cbId === cbId
//   );

//   const [formData, setFormData] = useState<{
//     selectedCreative: string;
//     creativeName: string;
//     uploadedFile: File | null;
//     size: number | null;
//   }>({
//     selectedCreative: creativesToEdit?.[0]?.ctId || "",
//     creativeName: creativesToEdit?.[0]?.cbName || "",
//     uploadedFile: null,
//     size: creativesToEdit?.[0]?.csId || "",
//   });

//   const [error, setError] = useState<{ field: string; message: string } | null>(
//     null
//   );

//   const handleCreativeChange = (event: SelectChangeEvent<string>) => {
//     setFormData((prev) => ({
//       ...prev,
//       selectedCreative: event.target.value,
//     }));
//     if (error) setError(null);
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = event.target;

//     if (name === "uploadedFile") {
//       setFormData((prev) => ({
//         ...prev,
//         uploadedFile: files ? files[0] : null,
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }

//     if (error) setError(null);
//   };

//   const handleUpload = async () => {
//     setError(null);

//     const { selectedCreative, creativeName, uploadedFile, size } = formData;

//     if (!selectedCreative) {
//       setError({
//         field: "selectedCreative",
//         message: "Creative Type is required.",
//       });
//       return;
//     }
//     if (!creativeName) {
//       setError({
//         field: "creativeName",
//         message: "Creative Name is required.",
//       });
//       return;
//     }
//     if (!uploadedFile) {
//       setError({ field: "uploadedFile", message: "File upload is required." });
//       return;
//     }
//     if (size === null) {
//       setError({ field: "size", message: "Size is required." });
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("cbId", cbId.toString());
//     formDataToSend.append("cbName", creativeName);
//     formDataToSend.append("ctId", selectedCreative);
//     formDataToSend.append("csId", size.toString());
//     formDataToSend.append("cbPath", uploadedFile);
//     formDataToSend.append("cszId", "4");
//     formDataToSend.append("createdBy", "1");

//     try {
//       const response = await axiosClient.post(
//         "/creatives/update",
//         formDataToSend
//       );
//       if (response.data.status === "success") {
//         toast.success(response.data.message);
//         if (handleDialogClose) handleDialogClose();
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("An error occurred during update.");
//     }
//   };

//   return (
//     <Dialog open={openDialog} maxWidth="lg" fullWidth>
//       <div className="p-5">
//         <DashboardTitle title="Update Creative" />
//         {isLoading && <Typography>Loading creatives...</Typography>}
//         {isError && (
//           <Typography color="error">Error loading creatives.</Typography>
//         )}

//         <Grid rowGap={3} container>
//           <Grid item xs={12}>
//             <FormControl fullWidth error={error?.field === "selectedCreative"}>
//               <InputLabel size="small" id="creative-type-label">
//                 Creative Type
//               </InputLabel>
//               <Select
//                 fullWidth
//                 size="small"
//                 value={formData.selectedCreative}
//                 onChange={handleCreativeChange}
//                 label="Creative Type"
//                 labelId="creative-type-label"
//               >
//                 {creativesets?.list?.map((creativeSet) => (
//                   <MenuItem key={creativeSet.csId} value={creativeSet.csId}>
//                     {creativeSet.csName}
//                   </MenuItem>
//                 )) || <MenuItem disabled>No creatives available</MenuItem>}
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               label="Creative Name"
//               variant="outlined"
//               fullWidth
//               name="creativeName"
//               value={formData.creativeName}
//               onChange={handleChange}
//               error={error?.field === "creativeName"}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               label="Creative Size"
//               variant="outlined"
//               fullWidth
//               name="size"
//               type="number"
//               value={formData.size || ""}
//               onChange={handleChange}
//               error={error?.field === "size"}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               label="Upload File"
//               variant="outlined"
//               type="file"
//               name="uploadedFile"
//               fullWidth
//               onChange={handleChange}
//               error={error?.field === "uploadedFile"}
//             />
//           </Grid>

//           <Grid container item xs={12} justifyContent={"flex-end"} gap={2}>
//             <Button
//               variant="contained"
//               color="error"
//               onClick={handleDialogClose}
//             >
//               Cancel
//             </Button>
//             <Button variant="contained" onClick={handleUpload}>
//               Update
//             </Button>
//           </Grid>
//         </Grid>
//       </div>
//     </Dialog>
//   );
// };

// export default CreativeUpdatedMain;
import {
  Typography,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Button,
  SelectChangeEvent,
  FormControl,
  Dialog,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DashboardTitle } from "../DashboardContainer";
import axiosClient from "@/apis/axiosClient";
import toast from "react-hot-toast";
import { getAllCreatives } from "@/apis/creatives";
import { useQuery } from "@tanstack/react-query";

interface CreativeUploadMainProps {
  openDialog: boolean;
  handleDialogClose?: () => void;
  cbId: number;
}

const CreativeuploadMain: React.FC<CreativeUploadMainProps> = ({
  openDialog,
  handleDialogClose,
  cbId,
}) => {
  const [formData, setFormData] = useState({
    selectedCreative: "",
    creativeName: "",
    uploadedFile: null as File | null,
    size: "",
    creativeSets: "",
  });

  const [errors, setErrors] = useState({
    selectedCreative: false,
    creativeName: false,
    uploadedFile: false,
    size: false,
    creativeSets: false,
  });

  const creativeTypes = [
    { id: "1", name: "Display Ads" },
    { id: "2", name: "Video Ads" },
    { id: "3", name: "Native Ads" },
    { id: "4", name: "Audio Ads" },
  ];

  const creativeSets = [
    { id: "1", name: "Set A" },
    { id: "2", name: "Set B" },
    { id: "3", name: "Set C" },
  ];

  const creativeSizes = [
    { id: "1", name: "300 x 250 px" },
    { id: "2", name: "300 x 600 px" },
    { id: "3", name: "728 x 90 px" },
    { id: "4", name: "970 x 250 px" },
    { id: "5", name: "160 x 600 px" },
    { id: "6", name: "320 x 50 px" },
    { id: "7", name: "320 x 100 px" },
    { id: "8", name: "468 x 60 px" },
    { id: "9", name: "300 x 50 px" },
    { id: "10", name: "970 x 90 px" },
    { id: "11", name: "250 x 250 px" },
    { id: "12", name: "200 x 200 px" },
    { id: "13", name: "125 x 125 px" },
    { id: "14", name: "300 x 120 px" },
    { id: "15", name: "240 x 400 px" },
    { id: "16", name: "970 x 300 px" },
    { id: "17", name: "300 x 250 px" },
    { id: "18", name: "320 x 50 px" },
    { id: "19", name: "320 x 100 px" },
  ];

  const {
    data: creatives,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["creatives"],
    queryFn: () => getAllCreatives(),
  });

  const creativesToEdit = creatives?.list?.find((creative) => creative.cbId === cbId);

  useEffect(() => {
    if (creativesToEdit) {
      setFormData((prev) => ({
        ...prev,
        selectedCreative: creativesToEdit.ctId.toString(),
        creativeName: creativesToEdit.cbName,
        creativeSets: creativesToEdit.csId.toString(),
        size: creativesToEdit.cszId.toString(),
      }));
    }
  }, [creativesToEdit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        uploadedFile: event.target.files?.length ? event.target.files[0] : null,
      }));
      setErrors((prev) => ({ ...prev, uploadedFile: false }));
    }
  };

  const handleUpload = async () => {
    const { selectedCreative, creativeName, uploadedFile, size, creativeSets } = formData;

    const newErrors = {
      selectedCreative: !selectedCreative,
      creativeName: !creativeName,
      uploadedFile: !uploadedFile,
      size: !size,
      creativeSets: !creativeSets,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("cbId", cbId.toString());
    formDataToSend.append("cbName", creativeName);
    formDataToSend.append("ctId", selectedCreative);
    formDataToSend.append("csId", creativeSets);

    formDataToSend.append("cbPath", uploadedFile || "");
    formDataToSend.append("cszId", size);
    formDataToSend.append("createdBy", "1");

    try {
      const response = await axiosClient.post("/creatives/update", formDataToSend);
      if (response.data.status === "success") {
        toast.success(response.data.message);
        if (handleDialogClose) handleDialogClose();
        setFormData({
          selectedCreative: "",
          creativeName: "",
          uploadedFile: null,
          size: "",
          creativeSets: "",
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during upload.");
    }
  };

  return (
    <Dialog open={openDialog} maxWidth="lg" fullWidth>
      <div className="p-5">
        <DashboardTitle title="New Creative" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={errors.selectedCreative}>
                  <InputLabel size="small" id="creative-type-label">
                    Creative Type
                  </InputLabel>
                  <Select
                    fullWidth
                    size="small"
                    name="selectedCreative"
                    value={formData.selectedCreative}
                    onChange={handleSelectChange}
                    label="Creative Type"
                    labelId="creative-type-label"
                  >
                    {creativeTypes.map((creativeType) => (
                      <MenuItem key={creativeType.id} value={creativeType.id}>
                        {creativeType.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={errors.creativeSets}>
                  <InputLabel size="small" id="creative-set-label">
                    Creative Set
                  </InputLabel>
                  <Select
                    fullWidth
                    size="small"
                    name="creativeSets"
                    value={formData.creativeSets}
                    onChange={handleSelectChange}
                    label="Creative Set"
                    labelId="creative-set-label"
                  >
                    {creativeSets.map((creativeSet) => (
                      <MenuItem key={creativeSet.id} value={creativeSet.id}>
                        {creativeSet.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Creative Name"
                variant="outlined"
                fullWidth
                name="creativeName"
                value={formData.creativeName}
                onChange={handleChange}
                error={errors.creativeName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={errors.size}>
                <InputLabel size="small" id="creative-size-label">
                  Creative Size
                </InputLabel>
                <Select
                  fullWidth
                  size="small"
                  name="size"
                  value={formData.size}
                  onChange={handleSelectChange}
                  label="Creative Size"
                  labelId="creative-size-label"
                >
                  {creativeSizes.map((creativeSize) => (
                    <MenuItem key={creativeSize.id} value={creativeSize.id}>
                      {creativeSize.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Upload File"
              variant="outlined"
              type="file"
              fullWidth
              onChange={handleFileChange}
              error={errors.uploadedFile}
            />
          </Grid>

          <Grid container item xs={12} justifyContent={"flex-end"} gap={2}>
            <Button variant="contained" color="error" onClick={handleDialogClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleUpload}>
              Upload
            </Button>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default CreativeuploadMain;
