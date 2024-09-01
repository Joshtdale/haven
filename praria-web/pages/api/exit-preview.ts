export default function handler(req: any, res: { clearPreviewData: (arg0: {}) => void; redirect: (arg0: string) => void }) {
    res.clearPreviewData({})
    res.redirect('/')
}
