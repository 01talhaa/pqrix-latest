"use client"

import { useState } from "react"
import { ChevronRight, ArrowLeft } from "lucide-react"
import { portfolioData, getPortfolioFolders } from "@/data/portfolio"
import { Header } from "@/components/header"
import { ImageGallery } from "@/components/image-gallery"

const folders = getPortfolioFolders()

type ViewMode = "folders" | "files" | "preview"

export function PortfolioSection() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileView, setMobileView] = useState<ViewMode>("folders")

  const displayFiles = selectedFolder
    ? portfolioData[selectedFolder as keyof typeof portfolioData]
    : Object.values(portfolioData).flat()

  const filteredFiles = displayFiles.filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleFolderClick = (folder: string | null) => {
    setSelectedFolder(folder)
    setSelectedFile(null)
    setMobileView("files")
  }

  const handleFileClick = (file: any) => {
    setSelectedFile(file)
    setMobileView("preview")
  }

  const handleBackToFolders = () => {
    setMobileView("folders")
    setSelectedFolder(null)
    setSelectedFile(null)
  }

  const handleBackToFiles = () => {
    setMobileView("files")
    setSelectedFile(null)
  }

  return (
    <div className="w-full bg-[#FBFFFF] py-4 px-4 mb-20">
      {/* DEVICE WRAPPER: Changes max-width based on screen size to simulate different devices */}
      <div className="mx-auto transition-all duration-500 ease-in-out w-full max-w-[380px] md:max-w-[850px] lg:max-w-[1500px]">
        
        {/* PHYSICAL DEVICE FRAME (Bezel) */}
        <div className="relative bg-[#1a1a1a] shadow-[0_30px_100px_rgba(0,0,0,0.4)] 
          /* Phone Styling */
          border-[10px] border-[#222] rounded-[3.5rem] 
          /* Tablet Styling */
          md:border-[15px] md:rounded-[2.5rem] 
          /* Monitor Styling */
          lg:border-[20px] lg:border-b-[40px] lg:rounded-[2rem]">
          
          {/* PHONE ONLY: Dynamic Island / Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 md:hidden" />

          {/* MONITOR ONLY: Power LED */}
          <div className="hidden lg:block absolute bottom-[-30px] right-10 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_blue]" />

          {/* INNER SCREEN: This is where your content lives */}
          <div className="bg-[#F4F7F7] overflow-hidden relative
            /* Responsive Height for Internal Scrolling */
            h-[750px] md:h-[750px] lg:h-[750px]
            /* Internal Rounded Corners */
            rounded-[2.8rem] md:rounded-[1.8rem] lg:rounded-[0.5rem]">
            
            {/* Scrollable Container for the internal app */}
            <div className="h-full overflow-y-auto p-4 md:p-8 custom-scrollbar">
              
              {/* <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} /> */}

              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[280px_1fr_400px] gap-4 md:gap-6 mt-6">
                
                {/* Left Sidebar - Folders */}
                <div className={`space-y-4 ${mobileView !== "folders" ? "hidden lg:block" : "block"}`}>
                  <div className="bg-[#FBFFFF] rounded-2xl p-6 border border-border/50">
                    <h2 className="text-xl font-semibold leading-tight mb-2">Our Work</h2>
                    <p className="text-sm text-muted-foreground">
                      Explore our innovative projects across different technologies
                    </p>
                  </div>

                  <div className="bg-[#FBFFFF] rounded-2xl p-4 border border-border/50 space-y-1 max-h-[600px] overflow-y-auto">
                    <button
                      onClick={() => handleFolderClick(null)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                        selectedFolder === null ? "bg-muted/70" : "hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl opacity-60">📂</span>
                        <span className="text-sm font-medium">All Projects</span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-opacity ${
                          selectedFolder === null ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                    {folders.map((folder) => (
                      <button
                        key={folder}
                        onClick={() => handleFolderClick(folder)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                          selectedFolder === folder ? "bg-muted/70" : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl opacity-60">📁</span>
                          <span className="text-sm font-medium">{folder}</span>
                        </div>
                        <ChevronRight
                          className={`h-4 w-4 transition-opacity ${
                            selectedFolder === folder ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Center - File List */}
                <div className={`bg-[#FBFFFF] rounded-2xl p-4 border border-border/50 ${mobileView !== "files" ? "hidden lg:block" : "block"}`}>
                  <button
                    onClick={handleBackToFolders}
                    className="lg:hidden flex items-center gap-2 text-sm text-muted-foreground mb-4 hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Folders
                  </button>

                  <div className="h-full lg:h-[600px] overflow-y-auto">
                    <div className="space-y-1">
                      {selectedFolder && (
                        <div className="p-3 mb-2">
                          <h2 className="text-lg font-semibold">{selectedFolder}</h2>
                          <p className="text-sm text-muted-foreground">
                            {filteredFiles.length} {searchQuery ? "results" : "items"}
                          </p>
                        </div>
                      )}
                      {filteredFiles.length > 0 ? (
                        filteredFiles.map((file, index) => (
                          <button
                            key={`${file.name}-${index}`}
                            onClick={() => handleFileClick(file)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                              selectedFile?.name === file.name ? "bg-muted/70" : "hover:bg-muted/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md bg-[#FBFFFF] overflow-hidden flex-shrink-0">
                                <img
                                  src={file.thumbnail || "/placeholder.svg"}
                                  alt={file.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="text-sm font-medium text-left">{file.name}</span>
                            </div>
                            <ChevronRight
                              className={`h-4 w-4 transition-opacity ${
                                selectedFile?.name === file.name ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                              }`}
                            />
                          </button>
                        ))
                      ) : (
                        <div className="p-8 text-center text-muted-foreground">
                          <p>No files found matching "{searchQuery}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Sidebar - Preview */}
                <div className={`space-y-4 ${mobileView !== "preview" ? "hidden xl:block" : "block"}`}>
                  <button
                    onClick={handleBackToFiles}
                    className="xl:hidden flex items-center gap-2 text-sm text-muted-foreground mb-4 hover:text-foreground transition-colors bg-[#FBFFFF] rounded-2xl p-4 border border-border/50 w-full"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                  </button>

                  <div className="h-full xl:max-h-[600px] overflow-y-auto space-y-4">
                    <div className="bg-[#FBFFFF] backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-[#FBFFFF]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-full h-full p-8">
                            <div className="absolute top-8 left-8 right-8 text-[80px] md:text-[120px] font-bold text-primary leading-none opacity-20">
                              tech
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-48 h-64 md:w-64 md:h-80 rounded-[3rem] overflow-hidden border-4 border-primary/30">
                                <img
                                  src={selectedFile?.thumbnail || "/placeholder.svg?height=600&width=400"}
                                  alt={selectedFile?.name || "Preview"}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="absolute bottom-8 left-8 text-xs md:text-sm text-primary-foreground/80">
                              {selectedFile?.client || "enterprise client"}
                            </div>
                            <div className="absolute bottom-8 right-8 text-xs md:text-sm text-primary-foreground/80">
                              {selectedFile?.duration || "production"}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-lg font-semibold">{selectedFile?.name || "Project Name"}</h2>
                        <p className="text-sm text-muted-foreground">{selectedFile?.description || selectedFile?.size || "Project description"}</p>
                      </div>
                    </div>

                    {selectedFile?.images && selectedFile.images.length > 0 && (
                      <div className="bg-[#FBFFFF] rounded-2xl p-6 border border-border/50">
                        <h3 className="text-sm font-semibold mb-3">Project Gallery</h3>
                        <ImageGallery images={selectedFile.images} projectName={selectedFile.name} />
                      </div>
                    )}

                    <div className="bg-[#FBFFFF] backdrop-blur-sm rounded-2xl p-6 border border-border/50 space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Created</span>
                        <span className="font-medium">{selectedFile?.created || "2026"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{selectedFile?.duration || "N/A"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Client</span>
                        <span className="font-medium text-right">{selectedFile?.client || "Enterprise"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Team</span>
                        <span className="font-medium text-right">{selectedFile?.teamSize || "Cross-functional"}</span>
                      </div>
                    </div>

                    {selectedFile?.techStack && (
                      <div className="bg-[#FBFFFF] backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                        <h3 className="text-sm font-semibold mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedFile.techStack.map((tech: string) => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-muted/50 text-xs font-medium hover:bg-muted transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-[#FBFFFF] backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                      <h3 className="text-sm font-semibold mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {(selectedFile?.tags || "Technology, Innovation").split(", ").map((tag: string) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-muted/50 text-xs font-medium hover:bg-muted transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedFile?.results && (
                      <div className="bg-[#FBFFFF] backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                        <h3 className="text-sm font-semibold mb-3">Key Results</h3>
                        <div className="space-y-2">
                          {selectedFile.results.map((result: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2 text-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FBFFFF] flex-shrink-0"></span>
                              <span className="text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MONITOR ONLY: Desktop Stand (Visible only on lg+) */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="w-24 h-12 bg-[#2a2a2a] shadow-inner" />
          <div className="w-80 h-4 bg-[#1a1a1a] rounded-t-3xl shadow-2xl border-b-2 border-black" />
        </div>
      </div>
    </div>
  )
}