export default function Privacy() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-[#00F0FF]">Privacy Policy</h1>
      <div className="text-gray-400 space-y-4">
        <p>At HimalEVOps, we take your data seriously. We only access read-only OCPP data for the purpose of monitoring your charging stations.</p>
        <p>We do not store driver personal information, payment data, or admin credentials. All remote operations are logged and require explicit authorization.</p>
      </div>
    </div>
  );
}